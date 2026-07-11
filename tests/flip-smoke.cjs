const assert = require("node:assert/strict");
const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const chromePath = process.env.CHROME_PATH;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

function createServer() {
  return http.createServer((request, response) => {
    const pathname = new URL(request.url, "http://127.0.0.1").pathname;
    if (pathname === "/favicon.ico") {
      response.writeHead(204).end();
      return;
    }

    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
    const filePath = path.resolve(root, relativePath);

    if (!filePath.startsWith(`${root}${path.sep}`) || !fs.existsSync(filePath)) {
      response.writeHead(404).end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(response);
  });
}

async function readFaces(page) {
  return page.locator(".flip-stage").evaluate((stage) => {
    const back = stage.querySelector(".flip-back");
    const front = stage.querySelector(".flip-front");
    const read = (face) => {
      const style = getComputedStyle(face);
      return {
        opacity: Number(style.opacity),
        visibility: style.visibility,
        pointerEvents: style.pointerEvents,
        ariaHidden: face.getAttribute("aria-hidden")
      };
    };

    return {
      flipped: stage.dataset.flipped,
      back: read(back),
      front: read(front)
    };
  });
}

async function runScenario(browser, baseUrl, scenario) {
  const context = await browser.newContext({
    viewport: scenario.viewport,
    deviceScaleFactor: scenario.scale,
    hasTouch: scenario.hasTouch || false
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));
  await page.addInitScript(() => {
    Math.random = () => 0;
  });

  const query = scenario.safeFlip ? "?safeFlip=1" : "";
  await page.goto(`${baseUrl}/${query}`);
  assert.equal(await page.locator("html").getAttribute("data-flip-mode"), scenario.expectSafe ? "safe" : "3d");

  await page.evaluate(() => {
    localStorage.setItem("speech-card-board-counts-v1", JSON.stringify({ "health-01": 3 }));
  });
  await page.reload();

  if (scenario.safeFlip) {
    await page.evaluate(() => {
      window.__flipFrames = [];
      window.__nativeRequestAnimationFrame = window.requestAnimationFrame.bind(window);
      window.requestAnimationFrame = (callback) => {
        window.__flipFrames.push(callback);
        return window.__flipFrames.length;
      };
    });
  }

  const healthCard = page.locator('[data-theme-id="health"]');
  if (scenario.safeFlip) {
    await healthCard.evaluate((button) => button.click());
  } else if (scenario.hasTouch) {
    await healthCard.tap();
  } else {
    await healthCard.click();
  }

  if (scenario.safeFlip) {
    const initialFaces = await readFaces(page);
    assert.equal(initialFaces.flipped, "false");
    assert.deepEqual(
      [initialFaces.back.opacity, initialFaces.back.visibility, initialFaces.back.pointerEvents],
      [1, "visible", "auto"]
    );
    assert.deepEqual(
      [initialFaces.front.opacity, initialFaces.front.visibility, initialFaces.front.pointerEvents],
      [0, "hidden", "none"]
    );
    await page.evaluate(() => {
      const firstFrame = window.__flipFrames.shift();
      window.requestAnimationFrame = window.__nativeRequestAnimationFrame;
      firstFrame();
    });
  }

  await page.locator('.flip-stage[data-flipped="true"]').waitFor();
  if (scenario.expectSafe) {
    await page.waitForTimeout(260);
  }

  const faces = await readFaces(page);
  assert.equal(faces.back.ariaHidden, "true");
  assert.equal(faces.front.ariaHidden, "false");
  if (scenario.expectSafe) {
    assert.deepEqual(
      [faces.back.opacity, faces.back.visibility, faces.back.pointerEvents],
      [0, "hidden", "none"]
    );
    assert.deepEqual(
      [faces.front.opacity, faces.front.visibility, faces.front.pointerEvents],
      [1, "visible", "auto"]
    );
  }

  assert.equal(
    await page.evaluate(() => JSON.parse(localStorage.getItem("speech-card-board-counts-v1"))["health-01"]),
    4
  );
  await page.locator(".flip-card").evaluate((button) => {
    button.click();
    button.click();
    button.click();
  });
  await page.locator('.flip-stage[data-flipped="false"]').waitFor();
  assert.equal(await page.locator("#spotlight").getAttribute("data-closing"), "true");
  const closingFaces = await readFaces(page);
  assert.equal(closingFaces.back.ariaHidden, "false");
  assert.equal(closingFaces.front.ariaHidden, "true");
  await page.locator(".spotlight:not(.is-open)").waitFor({ state: "attached" });
  await page.reload();
  assert.match(await page.locator(".theme-column").first().innerText(), /4회/);
  assert.deepEqual(consoleErrors, []);
  await context.close();
}

async function main() {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;
  const launchOptions = chromePath ? { executablePath: chromePath } : {};

  try {
    for (const args of [[], ["--disable-gpu"], ["--use-angle=swiftshader"]]) {
      const browser = await chromium.launch({ ...launchOptions, headless: true, args });
      try {
        await runScenario(browser, baseUrl, {
          viewport: { width: 1920, height: 1080 },
          scale: 1,
          expectSafe: false
        });
        await runScenario(browser, baseUrl, {
          viewport: { width: 3840, height: 2160 },
          scale: 1.25,
          expectSafe: false
        });
        await runScenario(browser, baseUrl, {
          viewport: { width: 1280, height: 800 },
          scale: 1.5,
          safeFlip: true,
          expectSafe: true
        });
        await runScenario(browser, baseUrl, {
          viewport: { width: 1280, height: 800 },
          scale: 1,
          hasTouch: true,
          expectSafe: true
        });
      } finally {
        await browser.close();
      }
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }

  console.log("Flip smoke tests passed in standard, safe, touch, no-GPU, and SwiftShader modes.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

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
    localStorage.removeItem("speech-card-board-limits-v1");
    localStorage.removeItem("speech-card-board-stock-v1");
  });
  await page.reload();
  assert.match(await page.locator(".theme-column").first().innerText(), /5\/5장/);

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
  assert.equal(
    await page.evaluate(() => JSON.parse(localStorage.getItem("speech-card-board-stock-v1"))["health-01"]),
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
  assert.match(await page.locator(".theme-column").first().innerText(), /01 · 4회\s+4\/5장/);
  assert.deepEqual(consoleErrors, []);
  await context.close();
}

async function closeCard(page) {
  await page.locator('.flip-stage[data-flipped="true"]').waitFor();
  await page.locator(".flip-card").click();
  await page.locator(".spotlight:not(.is-open)").waitFor({ state: "attached" });
}

async function runInventoryScenario(browser, baseUrl) {
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));
  await page.addInitScript(() => {
    Math.random = () => 0;
  });
  await page.goto(baseUrl);

  await page.locator('[data-action="limits"]').click();
  assert.equal(await page.locator("#limitFields input").count(), 20);
  assert.deepEqual(await page.locator("#limitFields input").evaluateAll((inputs) => inputs.map((input) => input.value)), Array(20).fill("5"));
  await page.locator('#limit-health-01').fill("2");
  await page.locator("#limitForm").evaluate((form) => form.requestSubmit());
  assert.equal(await page.locator("#limitDialog").getAttribute("open"), null);
  assert.match(await page.locator(".theme-column").first().innerText(), /2\/2장/);

  await page.locator('[data-theme-id="health"]').click();
  await closeCard(page);
  assert.deepEqual(
    await page.evaluate(() => ({
      count: JSON.parse(localStorage.getItem("speech-card-board-counts-v1"))["health-01"],
      remaining: JSON.parse(localStorage.getItem("speech-card-board-stock-v1"))["health-01"]
    })),
    { count: 1, remaining: 1 }
  );

  await page.locator('[data-action="limits"]').click();
  await page.locator('#limit-health-01').fill("4");
  await page.locator("#limitForm").evaluate((form) => form.requestSubmit());
  assert.deepEqual(
    await page.evaluate(() => ({
      limit: JSON.parse(localStorage.getItem("speech-card-board-limits-v1"))["health-01"],
      remaining: JSON.parse(localStorage.getItem("speech-card-board-stock-v1"))["health-01"]
    })),
    { limit: 4, remaining: 3 }
  );

  await page.reload();
  assert.match(await page.locator(".theme-column").first().innerText(), /01 · 1회\s+3\/4장/);
  page.once("dialog", (dialog) => dialog.accept());
  await page.locator('[data-action="reset"]').click();
  assert.equal(await page.evaluate(() => localStorage.getItem("speech-card-board-counts-v1")), "{}");
  assert.match(await page.locator(".theme-column").first().innerText(), /01 · 0회\s+4\/4장/);

  await page.locator('[data-action="limits"]').click();
  for (const input of await page.locator('[name^="health-"]').all()) {
    await input.fill("0");
  }
  await page.locator("#limitForm").evaluate((form) => form.requestSubmit());
  assert.equal(await page.locator('[data-theme-id="health"]').isDisabled(), true);
  assert.equal(await page.locator('.count-chip.is-exhausted').count(), 5);

  await page.reload();
  assert.equal(await page.locator('[data-theme-id="health"]').isDisabled(), true);

  await page.setViewportSize({ width: 375, height: 667 });
  await page.locator('[data-action="limits"]').click();
  const mobileLayout = await page.locator("#limitDialog").evaluate((dialog) => {
    const dialogRect = dialog.getBoundingClientRect();
    const footerRect = dialog.querySelector(".limit-footer").getBoundingClientRect();
    return {
      dialogLeft: dialogRect.left,
      dialogRight: dialogRect.right,
      dialogTop: dialogRect.top,
      dialogBottom: dialogRect.bottom,
      footerBottom: footerRect.bottom,
      viewportWidth: innerWidth,
      viewportHeight: innerHeight
    };
  });
  assert.equal(mobileLayout.dialogLeft >= 0 && mobileLayout.dialogRight <= mobileLayout.viewportWidth, true);
  assert.equal(mobileLayout.dialogTop >= 0 && mobileLayout.dialogBottom <= mobileLayout.viewportHeight, true);
  assert.equal(mobileLayout.footerBottom <= mobileLayout.viewportHeight, true);
  await page.locator(".dialog-close").click();
  assert.deepEqual(consoleErrors, []);
  await context.close();
}

async function runMockupContentScenario(browser, baseUrl, viewport) {
  const expectedTitles = {
    health: ["강한 자신", "정신의 도량", "가치 창조의 건강", "병을 이기는 용기", "자기답게 사는 힘"],
    relationships: ["변함없는 우정", "사이좋게 지내는 마음", "약속을 지키는 힘", "만남의 가능성", "마음을 여는 사람"],
    career: ["나만의 사명", "인생은 마라톤", "시작하는 습관", "지지 않는 혼", "노력의 습관"],
    money: ["인내 위의 행복", "인간성의 힘", "관점의 전환", "원점으로 돌아가기", "승리를 여는 용기"]
  };
  const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(baseUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  for (const [themeId, titles] of Object.entries(expectedTitles)) {
    for (const [index, expectedTitle] of titles.entries()) {
      await page.evaluate((randomValue) => {
        Math.random = () => randomValue;
      }, (index + 0.01) / titles.length);
      await page.locator(`[data-theme-id="${themeId}"]`).click();
      await page.locator('.flip-stage[data-flipped="true"]').waitFor();
      const layout = await page.locator(".flip-front").evaluate((front) => ({
        title: front.querySelector(".full-title").textContent,
        fitsHorizontally: front.scrollWidth <= front.clientWidth + 1,
        fitsVertically: front.scrollHeight <= front.clientHeight + 1
      }));
      assert.equal(layout.title, expectedTitle);
      assert.equal(layout.fitsHorizontally, true, `${themeId}-${index + 1} overflows horizontally at ${viewport.width}x${viewport.height}`);
      assert.equal(layout.fitsVertically, true, `${themeId}-${index + 1} overflows vertically at ${viewport.width}x${viewport.height}`);
      await closeCard(page);
    }
  }

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
        if (args.length === 0) {
          await runInventoryScenario(browser, baseUrl);
          await runMockupContentScenario(browser, baseUrl, { width: 1920, height: 1080 });
          await runMockupContentScenario(browser, baseUrl, { width: 375, height: 667 });
        }
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

  console.log("Mockup content, inventory, and flip tests passed in desktop, mobile, touch, no-GPU, and SwiftShader modes.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

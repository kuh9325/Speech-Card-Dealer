const themes = [
  {
    id: "health",
    title: "건강",
    subtitle: "몸과 마음을 오래 지키는 선택",
    accent: "#258d72",
    accentDeep: "#185f65",
    accentSoft: "#6fc2a1",
    coverCharacters: [
      "assets/cards/characters/boy-fist.png",
      "assets/cards/characters/woman-clipboard.png"
    ],
    speeches: [
      {
        id: "health-01",
        title: "강한 자신",
        body: "참된 건강이란 긍정적인 태도로 인생을 살아가며 무엇에도 지지 않는 강한 자신을 구축하는 데 있다.",
        frontImage: "assets/cards/fronts/health-01.png"
      },
      {
        id: "health-02",
        title: "정신의 도량",
        body: "인간의 진정한 가치는 외모나 지위가 아닌 정신의 도량에서 생긴다. 모든 것은 신심과 확신에 달려있다. ‘마음이 어떠한가. 행동이 어떠한가.’ 그것이 중요하다.",
        frontImage: "assets/cards/fronts/health-02.png"
      },
      {
        id: "health-03",
        title: "가치 창조의 건강",
        body: "‘건강하다’와 ‘아프지 않다’는 같은 의미가 아니다. 진정한 건강을 누리는 인생은 가치를 창조하는 인생이다. 가치있고 의미있는 일을 성취하기 위해 노력하는 인생이다. 끊임없이 자신의 한계를 뛰어넘는 인생이다.",
        frontImage: "assets/cards/fronts/health-03.png"
      },
      {
        id: "health-04",
        title: "병을 이기는 용기",
        body: "병도 인생의 일부이다. 불법의 관점에서 보면 ‘반드시 돌파구를 열겠다!’고 결의하고 병에 맞서 싸우는 용기가 중요하다. 진정한 건강은 긍정적이고 건설적인 태도에 있다.",
        frontImage: "assets/cards/fronts/health-04.png"
      },
      {
        id: "health-05",
        title: "자기답게 사는 힘",
        body: "‘인정받고 싶다’, ‘이왕이면 더 좋게 보이고 싶다’는 마음은 인간의 본성이다. 하지만 그 욕구에 지배당하면 자신이 누구인지 참된 목적이 무엇인지 망각하기 쉽다. 거기에서부터 정신의 타락은 시작된다. 자기답게 착실하게 살아가는 것이 최고의 모습이다.",
        frontImage: "assets/cards/fronts/health-05.png"
      }
    ]
  },
  {
    id: "relationships",
    title: "인간관계",
    subtitle: "우정과 연애 사이의 마음 읽기",
    accent: "#d24d6a",
    accentDeep: "#7d3e72",
    accentSoft: "#f08a7c",
    coverCharacters: [
      "assets/cards/characters/girl-thumb.png",
      "assets/cards/characters/girl-wave.png"
    ],
    speeches: [
      {
        id: "relationships-01",
        title: "변함없는 우정",
        body: "변함없는 우정은 어떠한 보배보다 존귀하다. 술책이나 이해관계가 아니라, 진실한 우정을 맺고 그 우정을 소중히 여기는 인생이 곧 빛나는 인생이다.",
        frontImage: "assets/cards/fronts/relationships-01.png"
      },
      {
        id: "relationships-02",
        title: "사이좋게 지내는 마음",
        body: "‘사이좋게 지내자.’고 생각하는 사람은 행복하다. ‘사이좋게 지내자.’고 마음을 쓰고 행동하는 사람은 훌륭하다. 마음이 깨끗하고 풍요로운 사람이다.",
        frontImage: "assets/cards/fronts/relationships-02.png"
      },
      {
        id: "relationships-03",
        title: "약속을 지키는 힘",
        body: "친구와 한 약속은 반드시 지켜야 한다. 그것이 진정한 우정을 의미한다. 그러나 타인과 한 약속을 지키려면, 먼저 자신에게 한 약속부터 지킬 줄 알아야 한다.",
        frontImage: "assets/cards/fronts/relationships-03.png"
      },
      {
        id: "relationships-04",
        title: "만남의 가능성",
        body: "사람을 만나자. 타인과의 교류는 새롭고 신나는 가능성을 열어준다. 사람을 만나면 마음이 촉발되고 활력이 넘친다. 그리고 더 많은 만남으로 이어져 우리의 삶도 우리의 세계도 한없이 넓어진다.",
        frontImage: "assets/cards/fronts/relationships-04.png"
      },
      {
        id: "relationships-05",
        title: "마음을 여는 사람",
        body: "한 사람의 마음이 다른 사람의 마음을 움직인다. 자신의 마음이 닫혀있으면 타인의 마음의 문도 굳게 닫혀버린다. 반면, 주변 모든 사람들을 따스한 봄의 햇살처럼 감싸 자기편으로 만드는 사람은 모두에게 소중하게 여겨지게 된다.",
        frontImage: "assets/cards/fronts/relationships-05.png"
      }
    ]
  },
  {
    id: "career",
    title: "진로",
    subtitle: "취업과 학업을 움직이는 방향감",
    accent: "#346ed6",
    accentDeep: "#26445f",
    accentSoft: "#7aa9ee",
    coverCharacters: [
      "assets/cards/characters/man-pen.png",
      "assets/cards/characters/man-tablet.png"
    ],
    speeches: [
      {
        id: "career-01",
        title: "나만의 사명",
        body: "모두 누구에게나 반드시 사명이 있습니다. 자기만이 할 수 있는 사명이 있습니다. 반드시 당신의 힘을 필요로 하는 사람이 반드시 어딘가에 있습니다. … 그것을 발견하려면 우선 눈앞의 ‘현실’에서 피하지 말아야 합니다.",
        frontImage: "assets/cards/fronts/career-01.png"
      },
      {
        id: "career-02",
        title: "인생은 마라톤",
        body: "인생은 ‘마라톤’입니다. 처음에는 꼴찌라 해도 상관없습니다. 그 때문에 자신을 포기하고 달리지 않으면 그것으로 ‘끝’입니다. 보잘것없는 인간이 되고 맙니다. 지금 꿈이 있는 사람도 없는 사람도 어쨌든 계속 달려야 합니다.",
        frontImage: "assets/cards/fronts/career-02.png"
      },
      {
        id: "career-03",
        title: "시작하는 습관",
        body: "결과는 아무래도 좋으니 우선 무엇인가를 시작해야 합니다. 무엇인가 노력해 보아야 합니다. 그러한 ‘도망가지 않는 습관’, ‘노력하는 습관’을 만들어야 합니다.",
        frontImage: "assets/cards/fronts/career-03.png"
      },
      {
        id: "career-04",
        title: "지지 않는 혼",
        body: "인간은 누구나 어떤 형태로든 콤플렉스를 가지고 있습니다. … 중요한 것은 그 콤플렉스에 ‘지지 않는’ 것입니다. 그 어떤 콤플렉스가 있다 해도 그것을 발판으로 삼아 인내하고 ‘두고 봐라!’ 하며 스스로를 격려하면서 나아가야 합니다. ‘지지 않는 혼’입니다.",
        frontImage: "assets/cards/fronts/career-04.png"
      },
      {
        id: "career-05",
        title: "노력의 습관",
        body: "유유하게 노력하는 ‘습관’을 붙인 사람은 장래 무슨 일이라도 극복할 수 있습니다. 그 ‘습관’이 최고의 재산입니다. 그러므로 지금 ‘눈앞의 과제에서 승리하라!’, ‘무엇인가를 시작하자!’고 호소하고 싶습니다.",
        frontImage: "assets/cards/fronts/career-05.png"
      }
    ]
  },
  {
    id: "money",
    title: "재물",
    subtitle: "경제와 금전을 대하는 기준",
    accent: "#c88a1a",
    accentDeep: "#28615b",
    accentSoft: "#e0b84c",
    coverCharacters: [
      "assets/cards/characters/woman-present.png",
      "assets/cards/characters/man-books.png"
    ],
    speeches: [
      {
        id: "money-01",
        title: "인내 위의 행복",
        body: "지지 마라. 강한 마음에 행복이! 가장 고생한 사람이 최후에는 가장 큰 행복을 쟁취할 수 있다. 행복은 인내라는 대지에 피는 꽃이라는 것을 잊지 말아야 한다.",
        frontImage: "assets/cards/fronts/money-01.png"
      },
      {
        id: "money-02",
        title: "인간성의 힘",
        body: "주위에서 ‘좋았다’고 칭찬받는 일은 바로 불법자로서 지닌 ‘인간성의 힘’이라고 말할 수 있습니다. ‘마음의 재’가 지닌 힘이 있기에 사람들에게서 신뢰받고, 모범적인 존재로 높이 평가받습니다. 불성이 빛나는 인간성으로 나타나고, 그 훌륭함이 신심하지 않는 사람들도 감동시킵니다. ‘저 사람은 정말 뭔가 다르다. 빛난다.’고 신뢰받는 일이 불법의 확고한 실증입니다.",
        frontImage: "assets/cards/fronts/money-02.png"
      },
      {
        id: "money-03",
        title: "관점의 전환",
        body: "인간의 행복은 고민이나 괴로움을 일으키는 번뇌를 없애거나 번뇌에서 벗어나야만 얻을 수 있는 것이 아니라, 고민이나 괴로움을 안고 있는 자신의 생명 안에 보리(인생을 여는 지혜와 힘)가 있다고 보는 ‘관점의 전환’을 제시한 법리입니다. 문제는 번뇌의 괴로움이 아닙니다. 번뇌를 어떻게 바라보고 행동하느냐에 달렸습니다.",
        frontImage: "assets/cards/fronts/money-03.png"
      },
      {
        id: "money-04",
        title: "원점으로 돌아가기",
        body: "마키쿠치 선생님도 ‘막히면 원점으로 되돌아가라’고 가르치셨습니다. ‘급할수록 돌아가라.’입니다.",
        frontImage: "assets/cards/fronts/money-04.png"
      },
      {
        id: "money-05",
        title: "승리를 여는 용기",
        body: "인생의 승리는 모두 용기에서 시작된다. 한 걸음 내딛는 용기, 좌절하지 않는 용기, 자신에게 지지 않는 용기. 용기만이 벽을 부술 수 있다.",
        frontImage: "assets/cards/fronts/money-05.png"
      }
    ]
  }
];

const STORAGE_KEY = "speech-card-board-counts-v1";
const LIMITS_STORAGE_KEY = "speech-card-board-limits-v1";
const STOCK_STORAGE_KEY = "speech-card-board-stock-v1";
const DEFAULT_CARD_LIMIT = 5;
const board = document.querySelector("#themeBoard");
const spotlight = document.querySelector("#spotlight");
const resetButton = document.querySelector('[data-action="reset"]');
const limitsButton = document.querySelector('[data-action="limits"]');
const limitDialog = document.querySelector("#limitDialog");
const limitForm = document.querySelector("#limitForm");
const limitFields = document.querySelector("#limitFields");
const coarsePointerQuery = window.matchMedia("(any-pointer: coarse)");
const safeFlipRequested = new URLSearchParams(window.location.search).get("safeFlip") === "1";
const safeFlipEnabled = safeFlipRequested || navigator.maxTouchPoints > 0 || coarsePointerQuery.matches;

document.documentElement.classList.toggle("safe-flip", safeFlipEnabled);
document.documentElement.dataset.flipMode = safeFlipEnabled ? "safe" : "3d";

let counts = loadCounts();
let limits = loadStorageObject(LIMITS_STORAGE_KEY);
let stock = loadStorageObject(STOCK_STORAGE_KEY);

function getImagePath(value) {
  return (value || "").trim();
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function loadStorageObject(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function loadCounts() {
  return loadStorageObject(STORAGE_KEY);
}

function saveCounts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
}

function saveInventory() {
  localStorage.setItem(LIMITS_STORAGE_KEY, JSON.stringify(limits));
  localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(stock));
}

function normalizeQuantity(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(999, Math.max(0, Math.floor(number)));
}

function getCardLimit(speechId) {
  return normalizeQuantity(limits[speechId], DEFAULT_CARD_LIMIT);
}

function getRemaining(speechId) {
  const limit = getCardLimit(speechId);
  return Math.min(limit, normalizeQuantity(stock[speechId], limit));
}

function renderBoard() {
  board.innerHTML = themes.map(renderThemeColumn).join("");
}

function renderThemeColumn(theme) {
  const style = [
    `--accent: ${theme.accent}`,
    `--accent-deep: ${theme.accentDeep}`,
    `--accent-soft: ${theme.accentSoft}`
  ].join("; ");

  const isExhausted = theme.speeches.every((speech) => getRemaining(speech.id) === 0);
  const label = isExhausted ? `${theme.title} 스피치 카드 소진` : `${theme.title} 스피치 카드`;

  return `
    <article class="theme-column" style="${style}">
      <button class="stack-button ${isExhausted ? "is-exhausted" : ""}" type="button" data-theme-id="${theme.id}" aria-label="${label}" ${isExhausted ? "disabled" : ""}>
        ${renderCardBack(theme)}
      </button>
      <div class="count-strip" aria-label="${theme.title} 카드 수량과 출력 기록">
        ${theme.speeches.map((speech, speechIndex) => renderCountChip(speech, speechIndex)).join("")}
      </div>
    </article>
  `;
}

function renderCardBack(theme, className = "card-back") {
  const [startCharacter, endCharacter] = theme.coverCharacters;

  return `
    <div class="${className} theme-cover theme-cover--${theme.id}" data-cover-theme="${theme.id}">
      <div class="cover-scene" aria-hidden="true">
        <div class="cover-panel"></div>
        <span class="cover-symbol cover-symbol--one"></span>
        <span class="cover-symbol cover-symbol--two"></span>
        <span class="cover-prop cover-prop--one"></span>
        <span class="cover-prop cover-prop--two"></span>
        <span class="cover-prop cover-prop--three"></span>
      </div>
      <div class="cover-copy">
        <h2 class="theme-title">${theme.title}</h2>
        <p class="theme-subtitle">${theme.subtitle}</p>
      </div>
      <img class="cover-character cover-character--start" src="${escapeAttribute(startCharacter)}" alt="" />
      <img class="cover-character cover-character--end" src="${escapeAttribute(endCharacter)}" alt="" />
    </div>
  `;
}

function renderCountChip(speech, speechIndex) {
  const count = counts[speech.id] || 0;
  const limit = getCardLimit(speech.id);
  const remaining = getRemaining(speech.id);

  return `
    <div class="count-chip ${remaining === 0 ? "is-exhausted" : ""}" title="${speech.title}: ${remaining}/${limit}장, 누적 ${count}회">
      <span>${String(speechIndex + 1).padStart(2, "0")} · ${count}회</span>
      <strong>${remaining}/${limit}장</strong>
    </div>
  `;
}

function chooseSpeech(theme) {
  const availableSpeeches = theme.speeches.filter((speech) => getRemaining(speech.id) > 0);
  if (availableSpeeches.length === 0) return null;

  const speech = availableSpeeches[Math.floor(Math.random() * availableSpeeches.length)];
  return {
    speech,
    index: theme.speeches.findIndex((item) => item.id === speech.id)
  };
}

function openSpeech(themeId, sourceButton) {
  const theme = themes.find((item) => item.id === themeId);
  if (!theme) return;

  const selection = chooseSpeech(theme);
  if (!selection) return;

  const { speech, index } = selection;
  const sourceRect = sourceButton.getBoundingClientRect();
  counts[speech.id] = (counts[speech.id] || 0) + 1;
  stock[speech.id] = getRemaining(speech.id) - 1;
  saveCounts();
  saveInventory();
  renderBoard();
  renderSpotlight(theme, speech, index, sourceRect);
}

function renderSpotlight(theme, speech, index, sourceRect) {
  const style = [
    `--accent: ${theme.accent}`,
    `--accent-deep: ${theme.accentDeep}`,
    `--accent-soft: ${theme.accentSoft}`,
    `--start-left: ${sourceRect.left}px`,
    `--start-top: ${sourceRect.top}px`,
    `--start-width: ${sourceRect.width}px`,
    `--start-height: ${sourceRect.height}px`
  ].join("; ");
  const frontImage = getImagePath(speech.frontImage || speech.image);
  const hasFrontImage = frontImage.length > 0;
  const image = hasFrontImage ? `<img class="full-card-image" src="${escapeAttribute(frontImage)}" alt="" />` : "";
  const textContent = hasFrontImage
    ? `<span class="sr-only">${theme.title} ${speech.title} 남은 ${getRemaining(speech.id)}장 누적 ${counts[speech.id]}회</span>`
    : `
      <div class="full-card-content">
        <div class="full-meta">
          <span>${theme.title}</span>
          <span>${String(index + 1).padStart(2, "0")} / 05</span>
        </div>
        <div class="full-title-group">
          <p class="full-theme">${theme.subtitle}</p>
          <h2 class="full-title">${speech.title}</h2>
          <p class="full-body">${speech.body}</p>
        </div>
        <div class="full-footer">
          <span>남은 ${getRemaining(speech.id)}장 · 누적 ${counts[speech.id]}회</span>
          <span>Speech Card</span>
        </div>
      </div>
    `;

  spotlight.innerHTML = `
    <div class="flip-stage" style="${style}" data-flipped="false">
      <button class="flip-card" type="button" aria-label="${speech.title} 카드 닫기">
        <div class="flip-face flip-back" aria-hidden="false">
          ${renderCardBack(theme, "card-back flip-card-back")}
        </div>
        <div class="flip-face flip-front ${hasFrontImage ? "has-image" : ""}" aria-hidden="true">
          ${image}
          ${textContent}
        </div>
      </button>
    </div>
  `;
  spotlight.dataset.closing = "false";
  spotlight.classList.add("is-open");
  spotlight.setAttribute("aria-hidden", "false");
  const stage = spotlight.querySelector(".flip-stage");
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if (!stage.isConnected) return;
      setFlipState(stage, true);
    });
  });
  spotlight.querySelector(".flip-card").focus();
}

function setFlipState(stage, isFlipped) {
  const back = stage.querySelector(".flip-back");
  const front = stage.querySelector(".flip-front");

  stage.classList.toggle("is-active", isFlipped);
  stage.dataset.flipped = String(isFlipped);
  back.setAttribute("aria-hidden", String(isFlipped));
  front.setAttribute("aria-hidden", String(!isFlipped));
}

function closeSpotlight({ immediate = false } = {}) {
  if (spotlight.dataset.closing === "true") return;

  const stage = spotlight.querySelector(".flip-stage");
  if (stage && !immediate) {
    spotlight.dataset.closing = "true";
    let isDone = false;
    const finish = () => {
      if (isDone) return;
      isDone = true;
      spotlight.dataset.closing = "false";
      spotlight.classList.remove("is-open");
      spotlight.setAttribute("aria-hidden", "true");
      spotlight.innerHTML = "";
    };

    setFlipState(stage, false);
    stage.addEventListener("transitionend", finish, { once: true });
    window.setTimeout(finish, 760);
    return;
  }

  spotlight.dataset.closing = "false";
  spotlight.classList.remove("is-open");
  spotlight.setAttribute("aria-hidden", "true");
  spotlight.innerHTML = "";
}

function resetCounts() {
  const shouldReset = window.confirm("모든 출력 기록을 0회로 초기화하고 카드 수량을 상한까지 채울까요?");
  if (!shouldReset) return;

  counts = {};
  stock = {};
  saveCounts();
  saveInventory();
  closeSpotlight();
  renderBoard();
}

function renderLimitFields() {
  limitFields.innerHTML = themes.map((theme) => `
    <section class="limit-group" style="--accent: ${theme.accent}">
      <h3>${theme.title}</h3>
      <div class="limit-list">
        ${theme.speeches.map((speech, index) => `
          <label class="limit-row" for="limit-${speech.id}">
            <span><b>${String(index + 1).padStart(2, "0")}</b>${speech.title}</span>
            <input id="limit-${speech.id}" name="${speech.id}" type="number" min="0" max="999" step="1" inputmode="numeric" value="${getCardLimit(speech.id)}" />
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function openLimitDialog() {
  renderLimitFields();
  if (typeof limitDialog.showModal === "function") {
    limitDialog.showModal();
  } else {
    limitDialog.setAttribute("open", "");
  }
  limitFields.querySelector("input")?.focus();
}

function closeLimitDialog() {
  if (typeof limitDialog.close === "function") {
    limitDialog.close();
  } else {
    limitDialog.removeAttribute("open");
  }
}

function saveLimits(event) {
  event.preventDefault();
  const formData = new FormData(limitForm);

  themes.flatMap((theme) => theme.speeches).forEach((speech) => {
    const oldLimit = getCardLimit(speech.id);
    const oldRemaining = getRemaining(speech.id);
    const used = Math.max(oldLimit - oldRemaining, 0);
    const newLimit = normalizeQuantity(formData.get(speech.id), oldLimit);
    limits[speech.id] = newLimit;
    stock[speech.id] = Math.max(newLimit - used, 0);
  });

  saveInventory();
  renderBoard();
  closeLimitDialog();
}

board.addEventListener("click", (event) => {
  const button = event.target.closest("[data-theme-id]");
  if (!button) return;
  openSpeech(button.dataset.themeId, button);
});

spotlight.addEventListener("click", closeSpotlight);

resetButton.addEventListener("click", resetCounts);
limitsButton.addEventListener("click", openLimitDialog);
limitForm.addEventListener("submit", saveLimits);
limitDialog.addEventListener("click", (event) => {
  if (event.target === limitDialog || event.target.closest?.('[data-action="close-limits"]')) {
    closeLimitDialog();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && spotlight.classList.contains("is-open")) {
    closeSpotlight();
  }
});

renderBoard();

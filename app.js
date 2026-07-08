const themes = [
  {
    id: "health",
    title: "건강",
    subtitle: "몸과 마음을 오래 지키는 선택",
    accent: "#258d72",
    accentDeep: "#185f65",
    accentSoft: "#6fc2a1",
    speeches: [
      {
        id: "health-01",
        title: "아침 루틴",
        body: "하루의 컨디션은 거창한 결심보다 첫 10분의 움직임에서 시작됩니다.",
        image: ""
      },
      {
        id: "health-02",
        title: "몸의 신호",
        body: "피곤함, 통증, 식욕은 몸이 보내는 문장입니다. 무시하지 않는 태도가 건강의 출발점입니다.",
        image: ""
      },
      {
        id: "health-03",
        title: "먹는 선택",
        body: "식사는 시간을 채우는 일이 아니라 나를 돌보는 가장 가까운 습관입니다.",
        image: ""
      },
      {
        id: "health-04",
        title: "휴식의 힘",
        body: "쉬는 시간은 멈춤이 아니라 다시 움직이기 위한 회복의 기술입니다.",
        image: ""
      },
      {
        id: "health-05",
        title: "오래 가는 체력",
        body: "꾸준한 사람은 강한 의지보다 반복 가능한 기준을 먼저 만듭니다.",
        image: ""
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
    speeches: [
      {
        id: "relationships-01",
        title: "오래 가는 우정",
        body: "친구를 오래 곁에 두는 힘은 특별한 이벤트보다 평소의 작은 응답에서 자랍니다.",
        image: ""
      },
      {
        id: "relationships-02",
        title: "갈등의 순간",
        body: "관계를 지키는 말은 이기는 말이 아니라 서로의 마음을 다시 듣게 하는 말입니다.",
        image: ""
      },
      {
        id: "relationships-03",
        title: "연애의 존중",
        body: "좋아한다는 말은 상대의 속도와 선택을 함께 존중할 때 더 선명해집니다.",
        image: ""
      },
      {
        id: "relationships-04",
        title: "거리 조절",
        body: "가까운 관계일수록 서로의 공간을 인정하는 태도가 신뢰를 깊게 만듭니다.",
        image: ""
      },
      {
        id: "relationships-05",
        title: "고마움 표현",
        body: "마음속 감사는 말로 꺼낼 때 비로소 관계를 따뜻하게 바꾸는 힘이 됩니다.",
        image: ""
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
    speeches: [
      {
        id: "career-01",
        title: "나의 강점",
        body: "진로는 남들이 인정한 이름보다 내가 반복해서 잘해온 행동에서 힌트를 얻습니다.",
        image: ""
      },
      {
        id: "career-02",
        title: "학업의 이유",
        body: "공부는 점수를 넘어서 내가 보고 싶은 세계를 더 정확히 보는 도구가 됩니다.",
        image: ""
      },
      {
        id: "career-03",
        title: "취업 준비",
        body: "좋은 준비는 완벽한 스펙보다 내가 어떤 문제를 해결할 사람인지 설명하는 힘입니다.",
        image: ""
      },
      {
        id: "career-04",
        title: "실패 기록",
        body: "실패는 방향을 잃었다는 증거가 아니라 다음 선택을 더 정교하게 만드는 자료입니다.",
        image: ""
      },
      {
        id: "career-05",
        title: "작은 실행",
        body: "막막한 목표도 오늘 할 수 있는 한 가지 행동으로 내려오면 현실이 되기 시작합니다.",
        image: ""
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
    speeches: [
      {
        id: "money-01",
        title: "돈의 역할",
        body: "돈은 목적지가 아니라 선택지를 넓히는 도구입니다. 기준이 있을 때 더 건강하게 쓰입니다.",
        image: ""
      },
      {
        id: "money-02",
        title: "소비 습관",
        body: "좋은 소비는 가격표보다 내가 정말 얻고 싶은 가치가 무엇인지 묻는 일에서 시작됩니다.",
        image: ""
      },
      {
        id: "money-03",
        title: "저축의 의미",
        body: "저축은 남은 돈을 모으는 일이 아니라 미래의 나에게 선택권을 남기는 약속입니다.",
        image: ""
      },
      {
        id: "money-04",
        title: "경제 감각",
        body: "경제를 안다는 것은 뉴스의 숫자보다 내 생활에 어떤 변화가 오는지 읽는 힘입니다.",
        image: ""
      },
      {
        id: "money-05",
        title: "투자의 태도",
        body: "투자는 빠른 행운을 찾는 일이 아니라 위험과 시간을 이해하며 결정하는 연습입니다.",
        image: ""
      }
    ]
  }
];

const STORAGE_KEY = "speech-card-board-counts-v1";
const board = document.querySelector("#themeBoard");
const spotlight = document.querySelector("#spotlight");
const resetButton = document.querySelector('[data-action="reset"]');

let counts = loadCounts();

function loadCounts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCounts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
}

function renderBoard() {
  board.innerHTML = themes.map(renderThemeColumn).join("");
}

function renderThemeColumn(theme, themeIndex) {
  const style = [
    `--accent: ${theme.accent}`,
    `--accent-deep: ${theme.accentDeep}`,
    `--accent-soft: ${theme.accentSoft}`
  ].join("; ");

  return `
    <article class="theme-column" style="${style}">
      <button class="stack-button" type="button" data-theme-id="${theme.id}" aria-label="${theme.title} 스피치 카드">
        <div class="card-back">
          <div class="card-pattern" aria-hidden="true"></div>
          <div class="card-copy">
            <span class="card-number">${String(themeIndex + 1).padStart(2, "0")}</span>
            <div>
              <h2 class="theme-title">${theme.title}</h2>
              <p class="theme-subtitle">${theme.subtitle}</p>
            </div>
          </div>
        </div>
      </button>
      <div class="count-strip" aria-label="${theme.title} 출력 기록">
        ${theme.speeches.map((speech, speechIndex) => renderCountChip(speech, speechIndex)).join("")}
      </div>
    </article>
  `;
}

function renderCountChip(speech, speechIndex) {
  const count = counts[speech.id] || 0;

  return `
    <div class="count-chip" title="${speech.title}: ${count}회">
      <span>${String(speechIndex + 1).padStart(2, "0")}</span>
      <strong>${count}회</strong>
    </div>
  `;
}

function chooseSpeech(theme) {
  const randomIndex = Math.floor(Math.random() * theme.speeches.length);
  return {
    speech: theme.speeches[randomIndex],
    index: randomIndex
  };
}

function openSpeech(themeId) {
  const theme = themes.find((item) => item.id === themeId);
  if (!theme) return;

  const selection = chooseSpeech(theme);
  const { speech, index } = selection;
  counts[speech.id] = (counts[speech.id] || 0) + 1;
  saveCounts();
  renderBoard();
  renderSpotlight(theme, speech, index);
}

function renderSpotlight(theme, speech, index) {
  const style = [
    `--accent: ${theme.accent}`,
    `--accent-deep: ${theme.accentDeep}`,
    `--accent-soft: ${theme.accentSoft}`
  ].join("; ");
  const hasImage = speech.image.trim().length > 0;
  const image = hasImage ? `<img class="full-card-image" src="${speech.image}" alt="" />` : "";

  spotlight.innerHTML = `
    <button class="full-card ${hasImage ? "has-image" : ""}" type="button" style="${style}" aria-label="${speech.title} 카드 닫기">
      ${image}
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
          <span>누적 ${counts[speech.id]}회</span>
          <span>Speech Card</span>
        </div>
      </div>
    </button>
  `;
  spotlight.classList.add("is-open");
  spotlight.setAttribute("aria-hidden", "false");
  spotlight.querySelector(".full-card").focus();
}

function closeSpotlight() {
  spotlight.classList.remove("is-open");
  spotlight.setAttribute("aria-hidden", "true");
  spotlight.innerHTML = "";
}

function resetCounts() {
  const shouldReset = window.confirm("모든 출력 기록을 0회로 초기화할까요?");
  if (!shouldReset) return;

  counts = {};
  saveCounts();
  closeSpotlight();
  renderBoard();
}

board.addEventListener("click", (event) => {
  const button = event.target.closest("[data-theme-id]");
  if (!button) return;
  openSpeech(button.dataset.themeId);
});

spotlight.addEventListener("click", closeSpotlight);

resetButton.addEventListener("click", resetCounts);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && spotlight.classList.contains("is-open")) {
    closeSpotlight();
  }
});

renderBoard();

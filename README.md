# Speech Card Dealer

전자칠판에서 바로 사용할 수 있는 테마별 랜덤 스피치 카드 웹앱입니다.

## 기능

- 건강 / 인간관계 / 진로 / 재물 테마 카드 스택 표시
- 테마 카드 클릭 시 해당 테마의 스피치 5개 중 1개 랜덤 출력
- 카드가 뒷면에서 앞면으로 뒤집히며 화면을 꽉 채우는 플립 확대 모션
- 전체 화면 카드를 다시 클릭하거나 `Esc`를 누르면 목록 화면으로 복귀
- 각 스피치별 누적 출력 횟수를 테마 카드 하단에 표시
- 각 스피치 카드의 기본 상한 5장과 남은 수량 표시
- 카드 출력 시 해당 종류 재고 1장 차감, 소진된 카드는 랜덤 선택에서 제외
- `카드 상한 설정`에서 카드 종류별 상한 수정
- 누적 기록은 브라우저 `localStorage`에 저장
- `기록 초기화` 버튼으로 출력 기록 초기화 및 카드 수량 재충전
- 터치 장치와 제한된 GPU 환경에서는 앞뒷면이 겹치지 않는 2D 안전 플립을 자동 사용

## 실행

별도 빌드 과정 없이 `index.html`을 브라우저로 열면 됩니다.

GitHub Pages를 사용할 경우 이 레포의 루트가 정적 사이트로 바로 동작합니다.

## 카드 애셋

테마 표지는 고정 비율 이미지가 아니라 반응형 HTML/CSS 장면으로 구성됩니다. 화면 비율에 맞춰 제목, 부제, 장식과 캐릭터 위치가 조정되며 전체 화면 플립에서도 같은 표지를 사용합니다.

표지 캐릭터는 `assets/cards/characters/`에 넣고 `coverCharacters`에 두 이미지 경로를 지정합니다.

```js
{
  id: "health",
  title: "건강",
  coverCharacters: [
    "assets/cards/characters/boy-fist.png",
    "assets/cards/characters/woman-clipboard.png"
  ]
}
```

표지 색상과 테마 장식은 `styles.css`의 `.theme-cover--health`, `.theme-cover--relationships`, `.theme-cover--career`, `.theme-cover--money`에서 관리합니다. 표지에는 제공된 `Hancom MalangMalang` 웹폰트를 사용합니다.

스피치 앞면 이미지는 각 스피치의 `frontImage`에 넣습니다.

```js
{
  id: "health-01",
  title: "강한 자신",
  body: "참된 건강이란 ...",
  frontImage: "assets/cards/fronts/health-01.png"
}
```

스피치 앞면은 `assets/cards/fronts/`에 있습니다.

스피치 앞면 이미지 값이 비어 있으면 기본 색상 카드 디자인과 텍스트 스피치가 표시됩니다.

## 스마트 칠판 안전 모드

터치 입력이 감지되거나 coarse pointer 환경이면 3D 합성 대신 2D 안전 플립이 자동 적용됩니다.
필요한 경우 주소 끝에 `?safeFlip=1`을 붙여 강제로 활성화할 수 있습니다.

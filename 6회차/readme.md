# 0. 공통

## 0)이론

- [ ] box-model: Margin -> Outline -> Border -> Padding -> Width

## 1) 일반

- [ ] 잘 모르는 게 있으면 [catpang](catpang.com)에 가서 참고하자
- [ ] 폴더 이름 영어로 짓기

## 2) 깃

- [ ] branch 나눠 작업 진행하기<br>
      `https://stackoverflow.com/a/33484321`
- [ ] issue 사용하기

## 3) 포토샵

- [ ] template과 내 작업물 비교하는 방법:
<ol>
  <li>브라우저에서 alt + prt sc</li>
  <li>포토샵에서 ctrl + v</li>
  <li>불투명도 조정</li>
</ol>

## 4) HTML

### 원칙

- [ ] 만들어야 할 것이 무한대로 늘어날 때 어떠한 방법을 취할지 생각하기
- [ ] 모듈화
- [ ] markup order: ARIA 염두하여 markup 짜기
- [ ] 코드 최적화 (코드 정리, 중복 제거 등)에 신경쓰자

### 마크업 사용법

- [ ] 강조 텍스트는 `<strong>` 이용하기
- [ ] 문단은 `<p>`로 작성
- [ ] `<ul>`/`<ol>`과 `<li>` 사이에 다른 태그가 올 수 없다
- [ ] `<dl>`, `<dt>`, `<dd>` 사이엔 다른 태그가 올 수 없다
- [ ] :first-child를 사용하고 싶을 때 사용하는 게 맞는지 생각해보자. `+` selector로 대체하는 게 맞을 수도 있다
- [ ] float을 주면 inline-block과 비슷하게 되지만 동일하게 되진 않는다

```
Q. float은 언제 사용하는가?
A.
1)float은 layout을 위해 사용하는 것이 아니라, 한 element를 한 쪽(오른쪽 혹은 왼쪽)으로 배치하고, 주변의 inline element 및 텍스트가 float element를 둘러싸게 만드는 역할을 함. float 은 블록 레이아웃의 사용을 뜻하기 때문에, 일부 경우에 지정한 display 값을 수정합니다.
```

- [ ] tag 간 상성 이해하기

```
Q. Block, inline, inline-block 차이
A. block 태그 안에 또 다른 block 태그가 올 수 없다.

1. Block:
- always takes up the full width available
- has a top and a bottom margin
ex)article, canvas, div, dl, dt, dd, footer, h1~h6, header, ol, ul, li, nav, p, section, table

2. Inline:
- does not start on a new line.
- inline element only takes up as much width as necessary
- doesn't have a top and a bottom margin
ex)a, button, br, img, input, span, strong, textarea
https://www.w3schools.com/html/html_blocks.

3. Inline-block:
- allows to set a width and height on the element unlike inline element
- does not add a line-break after the element
- 따라서 inline인데 block처럼 width와 height을 지정할 수 있는 것이라고 보면 됨

ex)According the default style sheet for HTML in the CSS 2.1 specification, the elements that have display: inline-block by default are: button, input, select, and textarea. Browsers use such settings, except that in Firefox, this only applies to button and select.
```

- [ ] 대제목에만 <`h1`> 주고 나머지에 `<h2>`주기

```
Q. <h1>을 제외한 나머지에 <h2>를 주면 언제 어디서 <h3>~<h6>을 사용하나?
```

- [ ] `<button type="button">`처럼 버튼 만들 때 type을 지정해줘야 한다

```
A. <button>의 type 기본값은 "submit"이다.
```

## 5) CSS

### 원칙

- [ ] reset.css
- [ ] easy CSS names
- [ ] CSS1, CSS2 위주로 이용하기
- [ ] 하나의 CSS파일로 통일하기
- [ ] height은 가급적 auto로 세팅
- [ ] default 스타일링에서 시작하여 필요한 텍스트 적은 이후 padding으로 조정하기
- [ ] 최상위 태그에만 width 정하고 나머지 layout 관련한 것엔 정하지 말기
- [ ] CSS 변수(var) 사용 자제하기
      `https://medium.com/dev-channel/css-variables-no-really-76f8c91bd34e`

### 프로퍼티 사용법

#### 일반

- [ ] height과 width 정해두고 시작하지 말기

```
Q. Using '%' and 'auto' on width and height
A.
1. Width
- margin-left/right을 주며 어떻게 작동하는지 볼 수 있음

1)%
- side-scrolling이 생김

2)auto (default)
- side-scrolling이 안생김

2. Height
- try not to set a height when you don't need to set a height
- or use 'min-width'

1)%
- 부모의 height에 비례한 %를 나타냄

2)auto
- 안에 contents가 생길수록 element가 자동적으로 늘어남 (주로 우리가 원하는 행동)

결론:
-least-favourable: height 지정 (height이 줄어들고 늘어날 여지가 없음)
-somewhat-favourable: min-height 지정 (height이 적어도 최소 정도를 유지하고 늘어날 여지가 있음)
-most-favourable: auto 지정 (contents 양에 따라 알아서 조정)
```

- [ ] 상하 배치 요소들을 좌우 배치 해야할 때: 하나를 absolute로 옮기고, 다른 하나를 padding/margin(?)으로 옮긴다
- [ ] horizontal scaling은 적용 안해도 되고 letter-spacing으로 이용하자

- [ ] `<a>`를 가장 밖에 감싸기. 그렇지 않을 때 어떤지 보기

```
A. ? 해봤는데 잘 모르겠음
```

- [ ] markup을 계단 구조로 작성하여 outerbox body 안에 head와 tail 넣기.
- [ ] h1 + background image + border bottom, .location
- [ ] CSS 작성 예제 참고하기

```
.ex {
  display: block;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  line-height: 0;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  font-family: '나눔';
  border: 1px solid #ddd;
  background: none;
  float: left;
  clear: both;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  z-index: 0;
}
```

#### .location

- [ ] .location에 position: absolute 쓰지 말고 relative 준 이후에 right 주기

```
<Position>
1. static
- default
- normal flow대로 배치됨
- top, bottom, left, right 프로퍼티에 영향받지 않음

2. relative
- positioned relative to its normal position
- top, right, bottom, left 프로퍼티를 적용하면 normal position에서 이동하게 됨
- Other content will not be adjusted to fit into any gap left by the element: 바로 아래에 다른 element가 있고 현재 element에 margin-top을 주어도 아래 것이 밀리거나 하지 않음. 겹치게 됨

3. fixed
- positioned relative to the viewport (meaning it always stays in the same place even if the page is scrolled)
- top, right, bottom, left 프로퍼티로 조정 가능

4. absolute
- positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
- if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling
- positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)

5. sticky
- positioned based on the user's scroll position
- toggles between relative and fixed, depending on the scroll position
- It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)
- Internet Explorer does not support sticky positioning. Safari requires a -webkit- prefix (see example below). You must also specify at least one of top, right, bottom or left for sticky positioning to work.
<Position in parent and child>
```

- [ ] .location에도 `<a>` 달고, :before/:after로 화살표 달기
- [ ] .location에 `<strong>`, `<a>` 사용하고 .location `<span>` + \*로 padding right(?) 주기

#### background

- [ ] background-image 대신 border 사용할 때: solid border bottom (not dotted) 이나 box body
- [ ] background 관련해 background property로 통일하기
- [ ] background-image만을 위해 불필요하게 태그 만들지 말고, 대신에 만들어진 text 태그에 background-image를 넣기
- [ ] background (포괄) 프로퍼티 이용하기: [w3school - background](https://www.w3schools.com/cssref/css3_pr_background.asp)

#### button

- [ ] button > span > span 순서는 head > tail > body와 관련
- [ ] button이 두 개 있고 margin을 줘야할 때 개별 버튼에 동일한 margin을 주지 말고, container를 만들어 container에 margin 주기
- [ ] 확장성을 생각하기: button 하나를 만들어도 button-container div 만들어 주기

#### display

- [ ] inline element는 크기 조정 불가하여 inline-block으로 바꿔줘야 함

#### margin & padding

- [ ] margin은 가급적 한 방향으로만 주기
- [ ] padding은 양방향 주는 것이 가능.
- [ ] margin은 형제끼리의 거리를 줄 때 사용한다

```
Q. 언제 margin을 쓰고 언제 padding을 쓰는가?
A. margin과 padding 둘 다 gap을 만들어낸다.

하지만 margin은 형제 element를 밀어내며 gap을 만들어낸다.

padding은 자기 자신을 키우거나, 내부의 컨텐츠 크기를 줄여 gap을 만들어낸다. element에 box-sizing: border-box를 지정하면 안의 content 사이즈를 줄여 gap을 만들어낸다.
https://medium.com/frontendshortcut/margin-vs-padding-c1fc8ea8bfaf
```

#### pseudo-class

- [ ] :before/:after pseudo-class 공부하고 이용하기

```
- content 무조건 필요
- 해당 element 바깥의 전, 후가 아닌 안쪽의 전, 후
- input과 같이 content 없고 self-closing tag엔 작동 안함
- 한 개의 before과 after만 가능
- 예시: required field (*)
- 예시: 툴팁
```

- [ ] 주로 사용하는 구조는 <부모>에 position: relative를 주고 <자식>에 position: absolute를 주는 것이다
- [ ] <자식>에 position: absolute를 주는 것으로 위와 같이 행동한다 (부모의 default position이 relative)

#### id & class

- [ ] id는 같은 이름 사용 못한다.
- [ ] class와 id에서 가급적 class를 사용한다
- [ ] script에서 묶어서 사용할 때 class를 이용하고, 개별로 사용할 때 id를 이용

## 해결 완료

- [ ] no responsive
- [ ] write in px instead of rem
- [ ] no `<hr>`, use cropped image
- [ ] use CSS background property instead of `<img>` tag
- [ ] nav 대신 .location이라는 클래스가 더 바람직할수도

# 2. Specific

## 1)채용안내

- [ ] 해태 로고 css background로 적용

### .head

- [ ] strong

### .introduction

- [ ] 해태로고는 p에 background-image

### .position

- [ ] dl

### .process

- [ ] `<ul>`
- [ ] border box
- [ ] pseudo-class 화살표

### .footer

- [ ] `<aside>` 대신 `<li>` 사용하기
- [ ] `-`(dash)를 텍스트 대신에 사진으로 대체하자

## 2)윤리규범 및 실천지침

### .tabs

- [ ] 버튼: `<a>`와 `<button>`으로 만들어보기
- [ ] 현재 클릭된 버튼: pseudo-class로 position: absolute로 흰색 조각 얹기
- [ ] 현재 클릭된 버튼: '.active' pseudo-class를 만들어 클릭된 탭에 오렌지 배경
- [ ] 버튼 클래스 2개 만들지 말고 css selector 이용하기 (w3school - + selector)[https://www.w3schools.com/cssref/sel_element_pluss.asp]

### .innerbox

- [ ] 점프 기능
- [ ] 01~06에서 다음줄 넘기는 것 `<br>` 은 안되니 어떻게 할지 고민해보기
- [ ] dotted horizontal line: dotted `<hr>` 대신 포토샵으로 뜯어서 만들기
- [ ] 넘버링 리스트: `<ol>` 사용하기
- [ ] 중복 리스트: `<ol>/<ul>`과 `<li>`사이에는 일절 다른 태그 올 수 없음
- [ ] 본문: `<p>`

- [ ] margin은 한방향으로만 주기
- [ ] padding은 양방향으로 줄 수 있음

## 3)인사관리

### .head

- [ ] 강조 문구는 `<strong>` 쓰기
- [ ] `<p><strong></p>`

### .innerbox

- [ ] innerbox border는 포토샵으로 할지 css border로 할지 생각해보기
- [ ] 제목과 내용을 이 중 중 원하는 것으로 이용하기
  - `<h1>`
  - `<dt><dd>`
  - `<ul><li>`
  - `<section>`

## 4)회원가입

### .head

#### 방법 1

- [ ] progress 단계에서 “02 약관동의”에 있다는 것만 알면 된다. 따라서 01, 03, 04의 것은 포토샵으로 따오고 02 만 적어서 작업하면 된다.
- [ ] 01, 03, 04는 border 만들고 오른쪽 화살표만 pseudo로 만들기
- [ ] header 중간의 “시원함과 즐거움이..”는 `<sup>`으로 올리자

### 방법 2

- [ ] 전체 이미지를 따와서 alt attribute만 주기

### .form

- [ ] `<textarea>`에 해당하는 내용을 `<p>` 대신 `<li>`로. `<li>` 안에 `<p>`가 있을 수 있음
- [ ] 전체를 `<form>`으로 묶자. 백엔드로 무엇을 보낼지도 고려해야 한다
- [ ] checkbox 전역을 눌러도 체크되게 하려면 `<input>`과 함께 `<label>`을 이용해야 한다
- [ ] 확인 버튼은 submit button으로
- [ ] 취소 버튼은?
- [ ] button type submit
- [ ] legend 이용하기
- [ ] fieldset 4개 생성
- [ ] progress에 전체 값만 넣어주기

## 5)인재상

### .body

- [ ] 영역은 잡혀야 하는 만큼만 잡고 필요할 때만 width와 height 이용하기
- [ ] 개별 아이템을 dl로 작성하기

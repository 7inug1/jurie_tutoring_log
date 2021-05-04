# HTML Tag Catego

1. Main root(1)
2. Document metadata(6)
3. Sectioning root(1)
4. Content sectioning(9)
5. Text content(13)
6. Inline text semantics
7. Image and multimedia
8. Embedded content
9. SVG and MathML
10. Scripting
11. Demarcating edits
12. Table content
13. Forms
14. Interactive elements
15. Web Components

https://developer.mozilla.org/en-US/docs/Web/HTML/Element#demarcating_edits

# 1. Main root(1)

- html

# 2. Document metadata(6)

```
- metadata는 데이터의 상위에 존재하는 데이터를 의미
- 즉 문서가 가지고 있는 데이터를 설명해주는 데이터가 메타데이터
- style, script, data에 대한 정보를 가지고 있음 (페이지 렌더링에 도움 주는)
```

- **base**: base url
- **head**
- **link**: css 파일 링크
- **style**
- **title**: page 탭에 뜨는 title
- **meta**: 여기 있는 metadata 요소로 표현할 수 없는 것들

# 3. Sectioning root(1)

- **body**: html document content

# 4. Content sectioning(9)

```
- document content를 논리적으로 나눌 수 있게 함
- document content의 개요를 잡는 걸 도와줌
- header, footer, navigation, heading elements(h1~h6) 등
```

- **article**: 포럼 게시글과 같이

- **header**: introductory content
- **h1~h6**: section headings
- **nav**: provide navigation links

- **main**: main content of the body of a document
- **section**: general sectioning element
- **aside**: 본 게시글에 간접적으로 연관된 글

- **address**: contact info
- **footer**: author, copyright data, document 관련 link를 주로 포함

# 5. Text content(13)

```
- 접근성과 SEO에 중요
- text content element는 그 컨텐츠의 목적과 구조를 잘 설명함
- body 태그 사이 -컨텐츠 블락/섹션을 잡는 데에 도움을 줌
```

## list

- **ul**
- **ol**
  - **li**

## description

- **dl**(description list)
  - **dt**(description title)
  - **dd**(description description)

## figure

- **figure**
- **fig-caption**: caption/legend for parent figure element

## else

### section

- **div**: generic container
- **blockquote**: quotation section from another source
- **hr**: 주제 변경을 의미하는 가로 줄

### text

- **p**: paragraph
- **pre**: preformatted text. 스페이스 있는대로 그대로 출력됨

# 6. Inline text semantics(31) -단어, 줄, 혹은 애매한 텍스트에 뜻, 구조, 스타일을 정의하게 도와줌

## bi-directional

- **bdi(bi-directional isolation)**: isolate part of text that migt be formatted in a different diirection from other text outside of it
- **bdo(bi-directional override)**: override current text direction

## underline-rendering

- **a(anchor)**
- **u(unarticulated)**: misspelled, proper names in Chinese text. rendered in underline

## bold-rendering

- **b(bold)**: no extra importance
- **strong**: define text with strong/extra importance.

## italics-rendering

- **i(italics)**: used to indicate a technical term, a phrase from another language, a thought, a ship name, etc. Use the `<i>` element only when there is not a more appropriate semantic element
- **dfn(definition)**: definition of a term. gets rendered in italics
- **em(emphasize)**: emphasizing a text in italics
- **cite**: used for a title of a work. gets rendered in italics.

## monospace-font-rendering

- **code**: used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.
- **kbd(keyboard)**: defines keyboard input. displayed in browser's default monospace font
- **samp(sample)**: sample output from a computer program. the content inside is displayed in the browser's default monospace font.

## ruby

`Rubi characters are small, annotative characters that are placed above or to the right of a Chinese character to show the pronunciation.`

- **rb(ruby base)**: base character
- **rp(ruby fallback parenthesis)**: used to provide parentheses around a ruby text, to be shown by browsers that do not support ruby annotations.
- **rt(ruby text)**: defines an explanation or pronunciation of characters (for East Asian typography) in a ruby annotation. 일본어 후리가나처럼 출력됨
- **rtc(ruby text container)**: marks the ruby text container for ruby text components in a ruby annotation
- **ruby**: outermost element

## else

- **abbr(abbreviation)**
- **br**: line break
- **data**: links a given piece of content with a machine-readable translation
- **mark**: marking/highlighting a text
- **q(quotation)**: short quotation. browser inserts quotation marks normally. opposite of `<blockquote>`
- **s(strikethrough)**
- **small**: smaller text
- **span**: inline container element
- **sub(subscript)**
- **sup(superscript)**
- **time**: `<time>` tag defines a specific time (or datetime). the datetime attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results.
- **var(variable)**: defines a variable in programming or in a mathematical expression. displayed in italics
- **wbr(word break)**: the word doesn't get broken when the page shrinks

# 7. Image and multimedia(6)

```
- image, audio, video를 지원
```

## image map

- **map**: define an image map. an image map is an image with clickable areas.
- **area**: defines an area inside an image map. always nested inside a `<map>` tag.

## multimedia

- **audio**: embedding sound content
- **img**: embedding image content
- **video**: embedding video content
- **track**: used as a child of the media elements, `<audio>` and `<video>`. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.

# 8. Embedded content

```
7. Image & multimedia를  제외하고 HTML에서 지원하는 다른 컨텐츠를 위한 태그
```

## multiple media resource

- **embed**: defines a container for an external resource by type, such as a web page, a picture, a media player, or a plug-in application. To display a picture, it is better to use the `<img>` tag. To display HTML, it is better to use the `<iframe>` tag. To display video or audio, it is better to use the `<video>` and `<audio>` tags.

- **object**: defines a container for an external resource by type, such as a web page, a picture, a media player, or a plug-in application. To display a picture, it is better to use the `<img>` tag. To display HTML, it is better to use the `<iframe>` tag. To display video or audio, it is better to use the `<video>` and `<audio>` tags.

  - **param**: The used to define parameters for an `<object>` element.

- **source**: The `<source>` tag is used to specify multiple media resources for media elements, such as `<video>`, `<audio>`, and `<picture>`. The `<source>` tag allows you to specify alternative video/audio/image files which the browser may choose from, based on browser support or viewport width. The browser will choose the first `<source>` it supports.

## nesting/embedding another HTML page

- **iframe**: nested browsing context, embedding another HTML page into the current one.

- **portal**: enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.

## else

- **picture**: can show different pictures based on different viewport. The most common use of the `<picture>` element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport. The `<picture>` element contains two tags: one or more `<source>` tags and one `<img>` tag.

# 9. SVG and MathML(2)

```
- SVG와 MathML을 곧장 HTML 문서 안에 넣기 위한 태그
```

- **svg**: a container that defines a new coordinate system and viewport
- **math**: math expression 위한 태그. mrow, msup, mi, mn, mo 등 존재

# 10. Scripting(3)

```
- 동적인 컨텐츠와 웹 앱을 만들기 위해, 자바스크립트와 같은 스크립팅 언어를 지원함
```

- canvas: use either the canvas scripting API or the WebGL API to draw graphics and animations.
- noscript: defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.
- script: used to embed a client-side script (JavaScript).

# 11. Demarcating edits(2)

```
- demarcating: 경계를 표시하다
- 텍스트의 특정 부분이 수정된 부분이 바뀌었다고 알려주는 요소
- github의 deleted와 inserted 보여주는 것과 유사
```

- del
- ins

# 12. Table content

```
- 테이블 형식의 데이터를 위한 요소
```

- **caption**: table caption that's placed on top of table
- **colgroup**: specifies a group of one or more columns in a table for formatting. Useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row. The `<colgroup>` tag must be a child of a `<table>` element, after any `<caption>` elements and before any `<thead>`, `<tbody>`, `<tfoot>`, and `<tr>` elements.
- **col**: specifies column properties for each column within a `<colgroup>` element.

## table

- **table**: HTML table. An HTML table consists of one `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.
- **tr**

## table head

- **thead**: group header content in an HTML table.
- **th**: cell for table header

## table body

- **tbody**: group body content in an HTML table.
- **td(table data)**: cell for table data

## table footer

- **tfoot**: group footer content in an HTML table.

```
 <table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```

# 13. Forms

```
- HTML 폼 구성을 위한 요소
```

- **form**
- **fieldset**: used to group several controls as well as labels (label) within a web form.
- **legend**: represents a caption for the content of its parent fieldset.

- **label**: represents a caption for an item in a user interface.

- **datalist**: contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.
- **option**: is used to define an item contained in a select, an optgroup, or a datalist element.

- **button**
- **input**: used to create interactive controls for web-based forms in order to accept data from the user;

- **meter**: represents either a scalar value within a known range or a fractional value.
- **optgroup**: creates a grouping of options within a select element.
- **select**
- **output**: a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
- **progress**: displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
- **textarea**: represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

# 14. Interactive elements

```
- 상호작용이 가능한 UI 객체를 만들 수 있는 요소
```

- **details**: specifies additional details that the user can open and close on demand.
- **summary**: used in conjuction with `<details>` to specify a visible heading for the details.
- **dialog**: defines a dialog box or subwindow. Makes it easy to create popup dialogs and modals on a web page.
- **menu**: represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.

# 15. Web Components

```
- 원래 존재하는 element같은 커스텀 element를 만들 수 있게 도와주는 요소
```

- **slot**: represents a placeholder inside a component created using the shadow DOM specification. This element becomes powerful in the development of compound widgets, favoring the reuse of code.
- **template**: 자바스크립트로 DOM manipulation 하기 전까진 안보임. This element and its contents are not rendered in the DOM, but it can still be referenced using JavaScript. Used as a container to hold some HTML content hidden from the user when the page loads. The content inside `<template>` can be rendered later with a JavaScript. You can use the `<template>` tag if you have some HTML code you want to use over and over again, but not until you ask for it. To do this without the `<template>` tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.

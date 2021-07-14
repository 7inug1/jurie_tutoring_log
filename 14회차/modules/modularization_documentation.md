# 모듈화

## 1. window

### index1

- .header .title01
- .wrapper01
- .coupon-image01
- .button01

### index2

- .header .title01
- .wrapper01
- .coupon-image02
- .button01

### index3

- .header .title01
- .wrapper01
- .coupon-image03
- h2
- .table01
- .button01

### index4

- .header .title01
- .wrapper01
- .coupon-image02
  h2
- .table01
  h2
- .textarea01 (+byte-in-length)
- .button01

### index5

- .header .title01
- .wrapper01

- .button01

### index6

- .header .title01
- .wrapper01

- .button01

### index7

- .header .title01
- .wrapper01

- .button01

### index8

- .header .title01
- .wrapper01
  {
  .select01
  .input02
  .button02
  }
  .table02
- .button01

### index9

- .header .title01
- .wrapper01
- .input01.v2
- .button01

### index10

- .header .title01
- .wrapper01

* dotted-line

- .input04.before & .input04.after
- .button01

## 2. layer

### index1

- .header .title01
- .wrapper01

- .button01
- .close-button01

### index2

- .header .title01
- .wrapper01

- .button01
- .close-button01

### index3

- .header .title01
- .wrapper01

- .button01
- .close-button01

### index4

- .header .title01
- .wrapper01

- .button01
- .close-button01

### index5

- .header .title01
- .wrapper01
- .table03
-
- .button01
- .close-button01

### index6

- .header .title01
- .wrapper01

- .button01
- .close-button01

## 3. gifticon

### index1

- .header .title01
- .wrapper01
- .table02
- h2
- .table02
- .button01

### index2

- .header .title01
- .wrapper01
- .button01
- .table02

### index3

- .header .title01
- .wrapper01
- .table02
- .button01

### index4

- .header .title01
- .wrapper01
- .button01

### index5

- .header .title01
- .wrapper01
- .button01

#### header title (.header .title01)

- .header .title01: 주황색 icon과 img로 된 h1

##### .wrapper

- .wrapper01: border: 3px solid #c6c6c6;

##### .main

- .main01: border-top: 1px solid #cdcccb; border-bottom: 1px solid #cdcccb;
- .main02: border-top: 1px solid #cdcccb; border-bottom: none;
  }

##### button (.button01)

- .button01 .orange: ('확인, 수정, 번호변경')
- .button01 .white: ('취소')
- .button02: ('찾아보기', '조회')

##### input (.input01)

- .input00:
  - height: 20px;
  - border: 1px solid #d8d8d8;
-
- .input01:
  - height: 21px;
  - border: 1px solid #d8d8d8;
- .input01.v1:
  - nothing extra
- .input01.v2:

  - .byte-in-length01
  - value (12px #64)

- .input02:

  - height: 20px;
  - border: 1px solid #e5e5e5;

- .input03:
  - height: 27px;
  - border: 1px solid #e5e5e5;
- .input03_v1:
  - nothing extra
- .input03_v2:

  - value (12px #64)

- .input04:
- .input04.before:
  - border: 1px solid #d5d5d5;
  - background: #eaeaea;
  - value (11px #64)
- .input04.after:
  - border: 1px solid #eaeaea;
  - background: #ffffff;
  - value (11px #64)

##### .length-in-byte (.length-in-byte)

- .length-in-byte01:
  - font-size: 12px;
  - color: #646464;
  - 0 V/A

##### textarea (.textarea01)

- .textarea01
- .textarea02

##### select (? .select01)

- .select01
  height: 20px;
  border: 1px solid #e5e5e5;
- .select02
  height: 20px;
  border: 1px solid #d8d8d8;

##### table (.table01)

- .table01(핑크색)
  - font-size: 12px;
  1. .table-container .table01
  - color: #969696;
  - letter-spacing: -0.35px;
  - border-top: 1px solid #d8b19b;
  - border-bottom: 1px solid #e6cec0;
  - background: #f4e9e3;
  - .vertical-bit
  2. .table-container .table01 + .table01
  - color: #646464;
  - border-bottom: 1px solid #ead6ca;
  - `... td {border-bottom: 1px solid #ead6ca;}`
  -
- .table02(회색)

  - border-top: 1px solid #dcdcdc;
  - border-bottom: 1px solid #e1e1e1;
  - `... th{ color: #969696; font-size: 12px; letter-spacing: -0.35px; background: #f5f5f5; text-align: center; vertical-align: middle; }`
  - `... td{color: #646464; font-size: 12px;}`

* dotted-line

- .table03(회색)
  - border-top: 1px solid #dedfde;
  - border-bottom: 1px solid #dedfde;

##### .coupon-image

.coupon-image01: dunkin image
.coupon-image02: gifticon + input
.coupon-image03: gifticon (+ no input)

##### .content

- .content01.title : 12px #96
- .content01.content : 12px #64
- .content01.subcontent : 앞에 ㅁ / 12px #64

- .content02: 앞에 . / 12px #64
- .content02.v2: 앞에 . / 12px #68

- .content03.title: font-weight: bolder, font-size: 12px, #46
- .content03.content: 앞에 . / 11px, #64
- - .content03.subcontent: 앞에 - / 11px, #64

##### .close-button

- close-button01:

### 2. layer

#### index1

- .header .title

#### index2

#### index3

#### index4

#### index5

#### index6

### 3. my-gifticon

## 네이밍

## 질문

- window의 index3, 4는 button 마크업을 바꿔도 되는지?
- input[type="text"]:focus, textarea{outline: 0 none} 적용해도 되는지?
- padding: 15px 0px 15px 15px; 이 나은지, 아니면 padding: 15px; 이 나은지

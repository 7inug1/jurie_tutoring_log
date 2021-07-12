# 모듈화

## 1. window

### index1

### index2

### index3

### index4

### index5

### index6

### index7

### index8

### index9

### index10

## 2. layer

### index1

### index2

### index3

### index4

### index5

### index6

## 3. gifticon

### index1

### index2

### index3

### index4

### index5

#### header title (.header .title01)

- .header .title01: 주황색 icon과 img로 된 h1

##### button (.button01)

- .button01 .orange: ('확인, 수정, 번호변경')
- .button01 .white: ('취소')
- .button02: ('찾아보기', '조회')

##### input (.input01)

- .input00:
  - height: 20px;
  - border: 1px solid #d8d8d8;
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

##### select (? .select01)

##### table (.table01)

- .table-container .table01(핑크색)
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
- .table-container .table02(회색)
  - border-top: 1px solid #dcdcdc;
  - border-bottom: 1px solid #e1e1e1;
  - `... th{ color: #969696; font-size: 12px; letter-spacing: -0.35px; background: #f5f5f5; text-align: center; vertical-align: middle; }`
  - `... td{color: #646464; font-size: 12px;}`

##### .coupon-image

##### .text-content

- coupon-image: input/textarea가 있는 이미지가 있고 아닌 이미지가 있음.

- button 02 - 1px 그림자가 있는 버튼
- table 01 - 핑크색 계열의 테이블
- table 02 - 회색 계열의 테이블
- textarea 01 - 회색 계열로 .length-in-byte가 같이 있음
- .length-in-byte
- input 01: 빈 것
- input 02: 01과 같은 형태로 보이나 .length-in-byte를 가지고 있음
- input 03: 02와 같은 형태로 보이나 input value까지 가지고 있음
- select 01
- .text-content 01: index5, 6 처럼 제목과 내용 부분이 있는 것
- .text-content 02: index 7, 10 처럼 앞에 . 있는 텍스트

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
- input[type="text"]:focus{outline: 0 none} 적용해도 되는지?

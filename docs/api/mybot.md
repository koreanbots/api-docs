# 자신의 봇

자신의 봇의 정보를 업데이트하거나 불러오는 엔드포인트들입니다.

<h2><method class="post">POST</method> /bots/servers</h2>

### 헤더

| 헤더 | 값 |
| ----| ---|
| Content-Type | application/json |
| token        | KOREANBOTS 토큰  |

### Body (JSON)

- `servers`
  - 봇의 서버 수

### 반환값 (Returns)

타입: `JSON`

- `code`: 200 | 400 | 403 | 401
  - 반환값 코드입니다. (`message`를 확인하시면 오류 내용을 보실 수 있습니다.)
- `message?`: string | Object
  - 오류 메세지입니다.

<h2><method class="get">GET</method> /bots/voted/:id</h2>

### 매개변수

| PARAM | 설명 |
| ------| -----|
| id    | 확인할 유저 ID |

### 해더

| 해더 | 값 |
| ----| ---|
| token        | KOREANBOTS 토큰  |

### 반환값 (Returns)

타입: `JSON`

- `code`: 200 | 400
  - 반환값 코드입니다. (`message`를 확인하시면 오류 내용을 보실 수 있습니다.)
- `voted?`: boolean
  - 투표 여부
- `message?`: string | Object
  - 오류 메세지입니다.

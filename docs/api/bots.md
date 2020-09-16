# 봇 리스트

모든 봇 리스트의 순위 등 다양한 정보를 불러오는 엔드포인트들입니다.

<h2><method class="get">GET</method> /bots/get</h2>

### 쿼리 파라미터

| QUERYSTRING | 설명 |
|-------------|------|
| page        | 조회할 페이지 번호 |

### 반환값 (Returns)

타입: `JSON`

- `code`: 200
  - 반환값 코드입니다. (`message`를 확인하시면 오류 내용을 보실 수 있습니다.)
- `data`: [Bot](#bot)
  - 반환되는 봇들입니다.
- `totalPage`
  - 전체 페이지 수
- `currentPage`
  - 현재 페이지 번호

## 타입

<h3 id="bot">Bot: Object</h3>

#### Properties

- `id`: string
  - 봇의 아이디
- `name`: string
  - 봇의 이름
- `servers`: number
  - 봇의 서버 수
- `votes`: number
  - 봇의 투표 수
- `intro`: string
  - 봇의 짧은 설명
- `avatar`: string
  - 봇의 세부 설명
- `url`: string|false
  - 봇의 초대링크
- `category`: [Category](#category)[]
  - 봇의 카테고리
- `tag`: string
  - 봇의 태그
- `state`: ok|archived|private
  - 봇의 공개 상태
  - ok: 공개 | archived: 잠금 | private: 특수목적 봇
- `verified`: boolean
  - 봇의 디스코드 인증 여부
- `trusted`: boolean
  - 봇의 KOREANBOTS 인증 여부
- `boosted`: boolean
  - 봇의 부스트 특전 여부
- `vanity`: string|false
  - 봇의 VANITY URL (해당 항목은 `boosted` 또는 `trusted` 항목이 허용되어있는 경우에만 적용됩니다)
- `banner`: string|false
  - 봇의 배너 링크 (미리보기 배경) (해당 항목은 `boosted` 또는 `trusted` 항목이 허용되어있는 경우에만 적용됩니다)
- `bg`: string|false
  - 봇의 배경 링크 (세부설명 배경) (해당 항목은 `boosted` 또는 `trusted` 항목이 허용되어있는 경우에만 적용됩니다)

<h3 id="category">Category: Enum</h3>

- `관리`
- `뮤직`
- `전적`
- `웹 대시보드`
- `로깅`
- `도박`
- `게임`
- `밈`
- `레벨링`
- `유틸리티`
- `번역`
- `대화`
- `NSFW`
- `검색`

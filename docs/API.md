# API

이곳에서는 API 요청의 기본적인 정보를 안내합니다.

## Base URL

모든 API의 기본 URL입니다.

```
https://koreanbots.dev/api
```

모든 엔드포인트의 요청은 이곳으로 보내게 됩니다.

요청을 보낼 때 반드시 API 버전을 포함하여 보내야 합니다.

## 버전

API 요청을 보낼 때는 다음과 같이 사용합니다.
`https://koreanbots.dev/api/{version}`

<message type="info">
  `v2` 버전의 API를 사용해주세요.
</message>

| 버전     | 상태   |
|---------|-------|
|   v2    |사용 가능|
|   v1    |지원 종료|
|   v0    |사용 불가|

<h2 id="ratelimit">레이트리밋</h2>

<Message type='error'>레이트리밋(RateLimit)은 로그인 토큰 기준이 아닌, IP 기준으로 적용됩니다. <br/> 레이트리밋은 클라이언트와 동일 IP로 접속할 경우 공유하게 됩니다.</Message>

효율적인 리소스 관리를 위한 일정시간의 요청 제한 시간입니다.

만약 제한된 요청 횟수보다 더 많이 요청할 경우 `429`의 **STATUSCODE**(상태코드)를 반환합니다.

### 엔드포인트별 레이트리밋

반환 상태코드가 `200`(SUCCESS)가 아닌 `400~500` 사이의 상태코드일 경우에도 레이트리밋은 카운트됩니다.

| ENDPOINT | RATELIMIT |
| -------- | --------- |
| /* (Global)| 120회/분  |

특정 엔드포인트들은 별도의 레이트리밋이 있습니다. [레이트리밋 헤더](#ratelimit-headers)를 통해 정보를 확인할 수 있습니다.

<h2 id="ratelimit-headers">레이트리밋 헤더</h2>

| 헤더명 | 설명 |
|-------|------|
| x-ratelimit-limit | 해당 엔드포인트에서 허용되는 요청 횟수입니다. |
| x-ratelimit-remaining | 남은 요청 가능 횟수입니다. |
| x-ratelimit-reset | 횟수 카운트가 리셋되는 시간입니다. |
| x-ratelimit-global | 레이트리밋 헤더가 라우트별이 아닌 글로벌 레이트 리밋임을 의미하는지를 나타냅니다. |

# 봇 서버 수 업데이트하기

해당 페이지에서는 봇의 서버 수를 확인하는 코드를 포함하고 있습니다.

## Javascript

```js
const fetch = require('node-fetch')
const BASEURL = 'https://api.koreanbots.dev'
const token = 'KOREANBOTS 토큰'
const serverCount = 100 // 서버 수

fetch(BASEURL + '/bots/servers', { method: 'POST', headers: { token, 'Content-Type': 'application/json' }, body: JSON.stringify({ servers: serverCount }) })
.then(r=> console.log(r.json())
.catch(e=> console.error(e))
```

## Cⵌ

```cs
Uri BASEURL = new Uri("https://api.koreanbots.dev");
string token = "KOREANBOTS 토큰";
int ServerCount = 100;

RestClient Client = new RestClient(BASEURL);
RestRequest Request = new RestRequest(Method.POST, "/bots/servers");
request.AddHeader("token", token);
request.AddBody(new {servers=ServerCount});
client.Execute(request);
```

## Python3

```py
from requests import post
BASEURL = "https://api.koreanbots.dev"
token = "KOREANBOTS 토큰"
serverCount = 100 # 서버 수

response = post(f'{BASEURL}/bots/servers', 
  headers={"token":token, "Content-Type": "application/json"},
  json={"servers": serverCount}
)
print(response.json())
```

# 유저 투표 여부 확인하기

해당 페이지에서는 유저의 투표 여부를 확인하는 코드를 포함하고 있습니다.

## Javascript

```js
const fetch = require('node-fetch')
const BASEURL = 'https://api.koreanbots.dev'
const token = 'KOREANBOTS 토큰'
const userID = 'ID'

fetch(BASEURL + '/bots/voted/' + userID, { headers: { token } })
.then(r=> r.json()).then(r=> console.log(r))
.catch(e=> console.error(e))
```

## C\#

```cs
Uri BASEURL = new Uri("https://api.koreanbots.dev");
string token = "KOREANBOTS 토큰";
ulong userID = ulong.Parse("ID");

RestClient Client = new RestClient(BASEURL);
RestRequest Request = new RestRequest(Method.GET, $"/bots/voted/{userID}");
Request.AddHeader("token", token);
var res = Client.Execute(Request);
Console.WriteLine(res.Content);
```

## Python3

```py
from requests import get
BASEURL = "https://api.koreanbots.dev"
token = "KOREANBOTS 토큰"
userID = 'ID' # int or str

response = get(f'{BASEURL}/bots/voted/{userID}', headers={"token":token})
print(response.json())
```

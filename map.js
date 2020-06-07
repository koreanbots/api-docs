module.exports = [
    {
        id: "main",
        name: "메인",
        docs: [
            {
                id: "starting",
                name: "시작하기",
                path: "/docs/main/starting.md"
            },
            {
                id: "api",
                name: "API",
                path: "/docs/main/api.md"
            },
            {
                id: "sdk",
                name: "언어별 SDK",
                path: "/docs/main/sdk.md"
            }
        ]
    },
    {
        id: "api",
        name: "엔드포인트",
        docs: [
            {
                id: "bots",
                name: "봇 리스트",
                path: "/docs/api/bots.md"
            },
            {
                id: "mybot",
                name: "자신의 봇",
                path: "/docs/api/mybot.md"
            }
        ]
    },
    {
        id: "topic",
        name: "예시",
        docs: [
            {
                id: "checkingVote",
                name: "유저 투표 여부 확인하기",
                path: "/docs/topic/checkingVote.md"
            },
            {
                id: "updateServer",
                name: "봇 서버 수 업데이트하기",
                path: "/docs/topic/updateServer.md"
            }
        ]
    }
]
const http = require('http');
let app = http.createServer((req, res) => {
    if (req.url === '/getdata') {
        res.setHeader("Content-Type","application/json;charset=utf-8")
        let arr = [
            {
                name: "张三",
                age: 20
            },
            {
                name: "lisi",
                age: 25
            },{
                name: "wangwu",
                age: 21
            }
        ];
        res.end(JSON.stringify(arr));
    }
});
app.listen(4000);
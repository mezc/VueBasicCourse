//导入http内置模块
const http = require("http")

//创建一个http服务器
const server = http.createServer()

//监听http服务器request请求
server.on("request", function(req, res){
    //write code here
    const url = req.url
    if(url === "/getscript"){
        var scriptStr = 'show()'
        res.end(scriptStr)
    }else{
        res.end("404")
    }
})

//指定端口号启动服务器监听
server.listen(3000,function(){
    console.log("server listen at http://127.0.0.1:3000")
})
const fs = require("fs")

function getFile(filePath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(filePath,"utf-8",(err,dataStr)=>{
            if(err) reject(err)
            resolve(dataStr)
        })
    })
    return promise
}

var promiseResult = getFile('./file/1.txt')

promiseResult.then(function(data){
    console.log(data)
    return getFile("./file/22.txt")
},function(err){
    //如果前面的promise执行失败，可以为每个promise 指定失败的回调函数，这样后面的promise就不会被终止,调用完后记得 return promise
    console.log("获取文件失败"+err.message)
    //读取文件2
    return getFile("./file/2.txt")
})
//在上一个节点返回的promise,可以用继续使用.then()
.then(function(data){
    console.log(data)
    return getFile("./file/3.txt")
},function(){})
.then(function(data){
    console.log(data)
},function(){})
//捕获异常，如果前面任何一个.then出错，立即终止后面的then
.catch(function(err){
    console.log(err.message)
})
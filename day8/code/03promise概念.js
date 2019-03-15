// 1.Promise是一个构造函数，new Promise()得到一个Promise实例
// 2Promise上有resolve(成功之后的回调函数)，reject(失败之后的回调函数)
//3.Promise.Prototype.then(),只要是promise创建的实例，都可以访问到.then()方法,.then()预先指定了成功调用resolve函数和失败调用reject函数
// 4.Promise()表示一个异步操作，每new一个实例，这个实例就表示一个具体的异步操作
//5.异步的结果，成功和失败
//5.1执行成功，在内部调用resolve将结果返回给调用者
//5.2执行失败，在内部调用reject将结果返回
//5.3异步操作内部拿到结果后，不能用return，只能使用回调函数的形式将结果返回
//6.每new一个Promise实例，就会立即执行异步操作里的代码,如不要立即执行，则需创建function函数，调用时才会执行

const fs = require("fs")
const path = require("path")



// var promise = new Promise(function(){
//     fs.readFile("./file/2.txt","utf-8",(err,dataStr)=>{
//         if(err) throw err
//         console.log(dataStr)
//     })
// })

function getFileByPath(filePath){//1
    var promise = new Promise(function(resolve,reject){//3
        fs.readFile(filePath,"utf-8",(err,dataStr)=>{//7
            // if(err) throw err
            // console.log(dataStr)
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise//4
}

var promistResult = getFileByPath("./file/3.txt")//2//5

promistResult.then(function(data){//6
    console.log(data + "----------")
},function(){
    console.log(err.message)
})
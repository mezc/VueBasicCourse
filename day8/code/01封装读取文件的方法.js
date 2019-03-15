const path = require("path")
const fs = require("fs")
//分析 __dirname:code
// __filename:code/file/1.txt

// fs.readFile(path.join(__dirname,"./file/1.txt"),"utf-8",(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr)
// })

function getFileByPath(fpath, successCallback,errCallback){
    fs.readFile(fpath,(err,dataStr)=>{
        if(err) return errCallback(err)
        successCallback(dataStr)
    })
}

getFileByPath(path.join(__dirname,"./file/1.txt"),function(data){
    console.log(data)
    getFileByPath(path.join(__dirname,"./file/2.txt"), function(data){
        console.log(data)
        getFileByPath(path.join(__dirname,"./file/3.txt"), function(data){
            console.log(data)
        })
    })
})
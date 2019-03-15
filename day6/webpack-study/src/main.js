console.log("ok")
import "../css/index.css"
import "../css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
// 这是es6的语法，用babel转成es3的写法
class Person {
    static info = {name:"benz",price:20}
}
console.log(Person.info)
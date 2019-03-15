console.log("ok")
import Vue from "vue"
// import Vue from "../node_modules/vue/dist/vue.js"
import login from "./login.vue"

var vm = new Vue({
    el:"#app",
    data:{
        msg:"123"
    },
    // render:function(createElement){
    //     return createElement(login)
    // }//可以简写成下面的形式
    render:c=>c(login),
    //逻辑：1.改写成箭头函数： (createElement)=>{return createElement(login)}
    // 2.()里只有一个变量，可以去掉（），{}里只有一条函数，可以去掉{},不加{}默认为return，可以去掉return:
    // createElement=>createElement(login)
    // 3.变量名太长，改成c:c=>c(login)

})

import m,{title,content} from "./test.js"
console.log("export default暴露的成员,用任意变量接收：",m)
console.log("export暴露的成员，用{}来接收：",title)
console.log("export第二次暴露成员：",content)
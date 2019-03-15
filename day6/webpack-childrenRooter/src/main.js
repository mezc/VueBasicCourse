import Vue from "vue"
//抽离路由到router.js
// //导入路由
// import VueRouter from "vue-router"
// //手动安装vuerouter
// Vue.use(VueRouter)
// //导入组件
// import account from "./main/Account.vue"
// import goodlist from "./main/GoodList.vue"

// //导入account的子组件
// import login from "./subCom/login.vue"
// import register from "./subCom/register.vue"

// //创建路由对象
// var router = new VueRouter({
//     routes:[
//         //account goodlist
//         {path:"/account",
//         component:account,
//         children:[
//             //子组件path不能有/开头
//             {path:"login",component:login},
//             {path:"register",component:register}
//         ]
//     },
//         {path:"/goodlist",component:goodlist}
//     ]
// })

//接收路由
import router from "./router.js"

// //导入全部mint-ui
// import MintUI from "mint-ui"//导入全部组件

// //导入样式
// import "mint-ui/lib/style.css"
// //导入图标
import "bootstrap/dist/css/bootstrap.css"
// //导入自定义样式
import "./css/app.css"

// //安装mintui
// Vue.use(MintUI)//把所有组件注册为全局的组件

//按需导入mint-ui
import {Button} from "mint-ui"
//使用Vue.component注册
Vue.component("mybtn",Button)
// Vue.component(Button.name,Button)
//Button.name对应的标签是<mt-button>

//导入mui组件
import "./lib/mui/css/mui.css"

//导入app组件
import App from "./App.vue"

//导入app组件
import app from "./APP.vue"
var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    //render会清空el所指向的div，不要将router-link router-view放在html中
    router//将路由挂载到vm上
})
//app这个组件是通过vm的render函数渲染出来的，render如果要渲染组件，渲染出来的的组件只能放到el所指向的#app元素中；
//account/goodlist是由路由匹配监听到的，这两个组件只能放到属于路由的<router-view>/<router-link>中，不能放到el所指向的#app中，会被render函数的渲染清空，应放在app.vue中
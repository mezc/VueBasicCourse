// console.log("ok")
import Vue from "vue"

import "../src/lib/css/index.css"


//import mint-ui
import {Header, Swipe, SwipeItem, Button} from "mint-ui"
//register mint-ui component
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


//导入mint-ui样式
import "mint-ui/lib/button/style.css"

//导入mui-icon-extra 样式
// import "./lib/mui/css/icons-extra.css"
import "./lib/mui/css/icons-extra.css"

// 导入extra字体样式
import "./lib/mui/fonts/mui-icons-extra.ttf"

//导入mui的样式
import "./lib/mui/css/mui.min.css"



//导入vue-resource
import VueResource from "vue-resource"
//安装
Vue.use(VueResource)


//配置路由
//1.1导入路由
import VueRouter from "vue-router"
//1.2安装路由
Vue.use(VueRouter)
//1.3导入router.js创建路由对象
import router from "./router.js"

//import app component
import app from "./App.vue"

//设置全局请求的根路径
Vue.http.options.root = "http://vue.studyit.io"

//导入格式化插件
import moment from "moment"

//定义全局过滤器
Vue.filter("dateFormat",function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})

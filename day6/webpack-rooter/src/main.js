import Vue from "vue"

//导入路由
import VueRouter from "vue-router"
//手动安装vuerouter
Vue.use(VueRouter)
//导入组件
import account from "./main/Account.vue"
import goodlist from "./main/GoodList.vue"

//创建路由对象
var router = new VueRouter({
    routes:[
        //account goodlist
        {path:"/account",component:account},
        {path:"/goodlist",component:goodlist}
    ]
})


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
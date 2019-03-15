import Vue from "vue"
//导入路由
import VueRouter from "vue-router"
//手动安装vuerouter
Vue.use(VueRouter)
//导入组件
import account from "./main/Account.vue"
import goodlist from "./main/GoodList.vue"

//导入account的子组件
import login from "./subCom/login.vue"
import register from "./subCom/register.vue"

//创建路由对象
var router = new VueRouter({
    routes:[
        //account goodlist
        {path:"/account",
        component:account,
        children:[
            //子组件path不能有/开头
            {path:"login",component:login},
            {path:"register",component:register}
        ]
    },
        {path:"/goodlist",component:goodlist}
    ]
})

export default router

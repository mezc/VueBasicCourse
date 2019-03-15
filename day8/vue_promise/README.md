#this is readme

#协议mit 之间的区别
#首次使用时，先cnpm i 安装所有包，生成一个node_modules文件
#制作app首页
1.header:mint-ui
2.底部 tabbar
3.中间：router-view

#改造tabbar为router-link
#设置路由高亮
#点击tabbar路由连接展示对应路由组件
#加载首页轮播图数据
1.获取数据：使用vue-resource,cnpm i vue-resource -D
2.main.js中，导入vue-resource:import VueResource from "vue-resource"
安装：Vue.use(VueResource)
3使用this.$http.get(webaddress).then(result=>{
    if(){}else{}
})
4.获取的数据保存到data上：data(){
    return{....}
}
5.使用v-for循环渲染每个item项

#改造新闻资讯，路由链接

#改新闻资讯页面制作
1.绘制界面，使用mui中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据


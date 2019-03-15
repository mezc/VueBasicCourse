<template>
    <div>
        <h1>这是App组件</h1>
        <mt-button type="primary" icon="more" @click = "show">点击出现提示信息，这是使用toast</mt-button>
        <mt-button type="danger" size="large" plain icon="back">default</mt-button>
        <mybtn type="primary">自定义的btn</mybtn>
        <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">Goodlist</router-link>

        <router-view></router-view>
    </div>
    
</template>

<script>
    //导入toast组件
    import {Toast} from "mint-ui"

    export default{
        data(){
            return { toastInstance:null}
        },
        created(){
            //当组件一被创建，就调用getList()
            this.getList()
        },
        methods:{
            //模拟3秒后自动消失的一个ajax方法
            getList(){
                //在获取数据之前立即弹出toast提示用户，正在加载数据
                this.show();
                //setTimeout有作用域问题，不能调用show 
                setTimeout(()=>{
                    this.toastInstance.close()
                },
                //当3秒后，获取的数据回来，要把toast移除
                3000)
            },
            show(){
                // Toast("点击出现提示信息")，调用toast后会有一个返回值，返回值有close方法，调用close方法，可以手动关闭
                this.toastInstance = Toast({
                    message:"设置提示内容",
                    position:"设置出现位置",
                    duration:-1,
                    iconClass:"glyphicon glyphicon-heart",//设置图标,用bootstrap,在main.js中导入图标,import "bootstrap/dist/css/bootstrap.css",打开bootstrap,将图标样式放在iconClass中，webpack.config.js中配置{test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"}
                    className:'mytoast',//自定义toast的样式，需自己提供一个类名新建css文件夹/app.css,在main.js中导入import "./css/app.css"
                })
            }
        }
    }

</script>

 <style>
 
 </style>
 

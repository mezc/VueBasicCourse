<template>
    <div>
        <!-- 轮播图区 -->
        <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <!-- <mt-swipe :auto="4000"> -->
            <!-- <mt-swipe-item v-for="item in lunboList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <!-- <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe> -->
        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
                
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        
    </ul> 
        <!-- 文字 -->
        <h3>this is homecontainer</h3>
        
    </div>
</template>

<script>
//获取数据失败时，提示信息
import { Toast } from "mint-ui"

export default {
    data(){
        return{
            // lunbotuList:[]//保存轮播图数组
        }
    },
    created(){
        // this.getLunbotu()
    },//组件一创建就调用getLunbotu
    methods:{
        // getLunbotu(){
        //     this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
        //         // console.log(result.body);
        //         if(result.body.status === 0){
        //             //获取数据成功
        //             this.lunbotuList = result.body.message
        //             Toast("加载轮播图成功")
        //         }else{
        //             Toast("加载轮播图失败")
        //         }
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 100px;
}

.mint-swipe-item{
    &:nth-child(1){
        background-color:purple;
    }
     &:nth-child(2){
        background-color:greenyellow;
    }
     &:nth-child(3){
        background-color:pink;
    }
    img{
        height: 100%;
        width: 100%;
    }
}
//ul
.mui-grid-view.mui-grid-9{
    background-color:white;
    img{
        width:60px;
        height: 60px;
    }
    //字体
    .mui-media-body{
    font-size: 5px;
}
}
//li
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;

}

</style>

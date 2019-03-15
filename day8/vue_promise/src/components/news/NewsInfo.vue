<template>
    <div class="newsinfo-container">
        <!-- <h1>新闻详情----{{id}}</h1> -->
        <!-- <h3 class='title'>新闻标题</h3> -->
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>

        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dataForamt}}</span>
            <span>点击：{{newsinfo.click}}</span>
        </p>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">

        </div>
    </div>
    
        <!-- 评论区域 -->
</template>

<script>
//导入评论子组件
import comment from "../subcomponents/comment.vue"

export default {
    data(){
        return {
            id:this.$route.params.id,//将url地址传递过来的id值，挂载到data上，方便以后调用.
            newsinfo:{}//新闻对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get("api/getnew/" + this.id).then(result =>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast("获取新闻失败")
                }
            })
        }
    },
    components:{
        //用来注册子组件的节点
        "comment-box":comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size:16px;
        text-align:center;
        margin: 15px 0;
        color:red;
    }
    .subtitle{
        font-size:13px;
        color:#226aff;
        display:flex;
        justify-content: space-between;
    }
    .content{
        img{
            width:100%
        }
    }
}

</style>


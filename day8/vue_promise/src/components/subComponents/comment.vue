<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>    
        <textarea placeholder="请输入内容最多120字" maxlength="10"></textarea>        

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-lsit">
            <div class="cmt-item">
                <div class="cmt-title"></div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>

    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.item-container{
    h3{
        font-size:18px;
    }

    textarea{
        font-size:14px;
        height:85px;
        margin:0;
    }
}

</style>


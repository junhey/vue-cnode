<template>
    <div>
        <div class="nav">
            <ul>
                <li class="active">全部</li>
                <li>精华</li>
                <li>分享</li>
                <li>问答</li>
                <li>招聘</li>
            </ul>
        </div>
    </div>
</template>
<script>
    
</script>
<style lang="scss" scoped>
    .nav {
        color: #fff;
        background-color: #333;
        ul{
            font-size: 0;
            li{
                display: inline-block;
                vertical-align: top;
                width: 20%;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                &.active{
                    font-size: 20rpx;
                    font-weight: bold;
                }
                
            }
        }
    }
</style>

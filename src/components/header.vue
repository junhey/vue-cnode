<template>
    <div>
        <div class="nav">
            <ul>
                <li class="active" @click="selectTab" data-navSelect='all'>全部</li>
                <li @click="selectTab" data-navSelect='good'>精华</li>
                <li @click="selectTab" data-navSelect='share'>分享</li>
                <li @click="selectTab" data-navSelect='ask'>问答</li>
                <li @click="selectTab" data-navSelect='job'>招聘</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                navSelect:''
            }
        },
        methods:{
            selectTab:function(e){
                this.navSelect=e.target.getAttribute('data-navSelect');
                this.$emit('changeTab',this.navSelect);
            }
        }
    }
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

<template>
    <div>
        <div class="nav">
            <ul>
                <li :class="navSelect=='all'?'active':''" @click="selectTab" data-navSelect='all'>全部</li>
                <li :class="navSelect=='good'?'active':''" @click="selectTab" data-navSelect='good'>精华</li>
                <li :class="navSelect=='share'?'active':''" @click="selectTab" data-navSelect='share'>分享</li>
                <li :class="navSelect=='ask'?'active':''" @click="selectTab" data-navSelect='ask'>问答</li>
                <li :class="navSelect=='job'?'active':''" @click="selectTab" data-navSelect='job'>招聘</li>
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
                    font-size: 20px;
                    font-weight: bold;
                }
                
            }
        }
    }
</style>

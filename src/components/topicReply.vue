<template>
   <div class="topic-reply">
        <div class="reply-item" v-for="(item,index) in replyData" :key="item.id">
            <div class="user-info">{{item.author.loginname}} {{index+1}}楼  {{item.create_at | fotmatTimeStr(true)}}</div>
            <div class="user-reply markdown-body    " v-html="item.content"></div>
        </div>
        
    </div>
</template>
<script>
    import utils from '../libs/utils.js';
    export default{
        filters:{
            fotmatTimeStr(time,isFromNow){
                return utils.getLastTimeStr(time, isFromNow);
            }
        },
        data(){
            return {
                
            };
        },
        props: ['replyData'],
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .topic-reply{
        position: relative;
        border-top: 10px solid #eee;
        .reply-item{
            padding:10px;
            font-size: 12px;
            text-align: left;
            border-bottom: 1px solid #eee;
            .user-info{
                position: relative;
                font-size: 12px;
                font-weight: bold;  
            }
            .user-reply{
                position: relative;
                font-size: 12px;
            }
        }
            
        }
</style>

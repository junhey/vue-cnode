<template>
    <div class="list-content">
        <div class="list-item" v-for="item in listData" v-bind:key="item.id">
            <router-link :to="{name:'topic',params:{id:item.id}}">
                <div class="list-img"><img :src="item.author.avatar_url" ></div>
                <div class="list-detail">
                    <div class="list-title">{{item.title}}</div>
                    <div class="list-time">{{item.last_reply_at | fotmatTimeStr(true)}}</div>
                    <div class="list-view">{{item.reply_count}}/{{item.visit_count}}</div>
                </div>
            </router-link>
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
        props: ['listData'],
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
    .list-content{
        position: relative;
        .list-item{
            position: relative;
            font-size:0;
            width: 100%;
            height: 58px;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
            .list-img{
                display: inline-block;
                vertical-align: top;
                width: 20%;
                height: 48px;
                img{
                    margin-top: 4px;
                    width: 40px;
                    height: 40px;
                }
            }
            .list-detail{
                position: relative;
                display: inline-block;
                vertical-align: top;
                width: 80%;
                height: 48px;
                font-size: 12px;
                color: #000;
                .list-title{
                    padding-right: 10px;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: keep-all;
                    white-space: nowrap;
                    text-align: left;
                }
                .list-view{
                    position: absolute;
                    bottom: 5px;
                }
                .list-time{
                    position: absolute;
                    bottom: 5px;
                    right: 10px;
                }
            }
        }
    }
</style>
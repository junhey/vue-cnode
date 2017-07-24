<template>
    <div>
        <div class="topic-page">
            <div class="topic-title">{{topicData.title}}</div>
            <div class="topic-desc">
                <ul>
                    <li>发布于:{{topicData.create_at | fotmatTimeStr(true)}}</li>
                    <li v-if="topicData.author">作者:{{topicData.author.loginname}}</li>
                    <li>浏览量:{{topicData.visit_count}}次</li>
                    <li>来自:{{getTabInfo(topicData.tab,false,false,false)}}</li>
                </ul>
            </div>
            <div class="topic-content markdown-body" v-html="topicData.content"></div>
            <topic-reply :replyData="topicData.replies"></topic-reply>
        </div>
    </div>
</template>
<script>
    require('../assets/scss/reset.css');
    require('../assets/scss/markdown.css');
    import axios from 'axios';
    import topicReply from '../components/topicReply';
    import utils from '../libs/utils.js';
    import { Toast } from 'mint-ui';
    export default{
        filters:{
            //格式化时间
            fotmatTimeStr(time,isFromNow){
                return utils.getLastTimeStr(time, isFromNow);
            }
        },
        data(){
            return {
                topicId:'',
                noData:false,
                topicData:[]
            }
        },
        mounted(){
            // 获取url传的tab参数
            this.topicId = this.$route.params.id;
            this.getTopic();
        },
        methods:{
            //获取文章内容
            getTopic(){
                let _this=this;
                axios.get('https://cnodejs.org/api/v1/topic/'+ this.topicId).then(function(res){
                    console.log(res);
                    if(res.status===200){
                        if(res.data.data.length!==0){
                            _this.topicData=res.data.data;
                        }else{
                            _this.noData = true;
                        }
                        
                    }else{
                        Toast('网络错误');
                    }
                });
            },
            // 获取不同tab的样式或者标题
            getTabInfo(tab, good, top, isClass) {
                return utils.getTabInfo(tab, good, top, isClass);
            },
        },
        components:{
            topicReply
        }
    }
</script>
<style lang="scss" scoped>
    .topic-page{
        position: relative;
        .topic-title{
            line-height: 20px;
            padding: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: keep-all;
            white-space: nowrap;
        }
        .topic-desc{
            position: relative;
            ul{
                font-size: 0;
                li{
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 12px;
                    padding: 0 5px;
                }
            }
        }
        .topic-content{
            position: relative;
            padding: 5px;
            border-top: 10px solid #eee;
        }
        
    }
</style>

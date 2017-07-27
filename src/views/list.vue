<template>
    <div>
        <cnode-header @changeTab="changeTab"></cnode-header>
        <list-content :listData="listData"></list-content>
    </div>
</template>
<script>
    require('../assets/scss/reset.css');
    import $ from 'webpack-zepto';
    import utils from '../libs/utils.js';
    import axios from 'axios';
    import cnodeHeader from '../components/listHeader';
    import listContent from '../components/listContent';
    import { mapGetters } from 'vuex';
    export default{
        mounted(){
            //初始化数据
            this.getList();
            // 滚动加载
            $(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
            console.log(this.userInfo.userId);//获取登录状态
        },
        data(){
            return {
                scroll:true,
                listData:[],
                index: {},
                searchKey: {
                    page: 1,
                    limit: 20,
                    tab: 'all',
                    mdrender: true
                }
            }
        },
        computed: {
            ...mapGetters({
                userInfo: 'getUserInfo'
            })
        },
        components:{
            cnodeHeader,listContent
        },
        methods:{
            getList(){
                let _this=this;
                axios.get('https://cnodejs.org/api/v1/topics',{
                    params:_this.searchKey
                }).then(function(res){
                    _this.scroll = true;
                    if(res.status===200){
                        //_this.listData=res.data.data;
                        if (res && res.data) {
                            res.data.data.forEach(_this.mergeTopics);
                        }
                    }else{
                        console.log('网络错误');
                    }
                });
            },
            mergeTopics(listData) {
                if (typeof this.index[listData.id] === 'number') {//number
                    const topicsIndex = this.index[listData.id];
                    this.listData[topicsIndex] = listData;
                } else {//undefined
                    this.index[listData.id] = this.listData.length;
                    this.listData.push(listData);
                }
            },
            changeTab(tab){
                // 如果是当前页面切换分类的情况
                if (tab) {
                    this.searchKey.tab = tab;
                    this.listData = [];
                    this.index = {};
                }
                this.searchKey.page = 1;
                this.getList();
            },
            getScrollData(){
                if(this.scroll){
                    let totalheight=parseInt($(window).height(),20)+parseInt($(window).scrollTop(),20);
                    if($(document).height()<=totalheight+200){
                        this.scroll=false;
                        this.searchKey.page+=1;
                        this.getList();
                    }
                }
            }
        }
    }
</script>

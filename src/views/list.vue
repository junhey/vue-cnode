<template>
    <div>
        <cnode-header @changeTab="changeTab"></cnode-header>
        <list-content :listData="listData"></list-content>
    </div>
</template>
<script>
    require('../assets/scss/reset.css');

    import axios from 'axios';
    import cnodeHeader from '../components/listHeader';
    import listContent from '../components/listContent'
    export default{
        mounted(){
            this.getList();
        },
        data(){
            return {
                tab:'',
                listData:[]
            }
        },
        components:{
            cnodeHeader,listContent
        },
        methods:{
            getList(){
                let _this=this;
                axios.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page:1,
                        limit:20,
                        tab:_this.tab||'all',
                        mdrender:true
                    }
                }).then(function(res){
                    console.log(res);
                    if(res.status===200){
                        _this.listData=res.data.data;
                    }else{
                        console.log('网络错误');
                    }
                });
            },
            changeTab:function(tab){
                this.tab=tab;
                this.getList();
            }
        }
    }
</script>

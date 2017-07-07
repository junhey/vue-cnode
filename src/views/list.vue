<template>
    <div>
        <cnode-header></cnode-header>
        <section id="list-page">
            <button v-on:click="getList">list</button><br>{{msg}}---{{data}}
        </section>
    </div>
</template>
<script>
    import axios from 'axios';
    import cnodeHeader from '../components/header'
    export default{
        data(){
            return {
                msg:'hello axios',
                data:[]
            }
        },
        components:{
            cnodeHeader
        },
        methods:{
            getList(){
                let _this=this;
                axios.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page:1,
                        limit:20,
                        tab:'all',
                        mdrender:true
                    }
                }).then(function(res){
                    console.log(res);
                    console.log(_this);
                    _this.data=res;
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    
</style>

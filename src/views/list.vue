<template>
    <div>
        <section id="list-page">
            <button v-on:click="getList">list</button><br>{{msg}}---{{data}}
        </section>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                msg:'hello axios',
                data:[]
            }
        },
        components:{

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

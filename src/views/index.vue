<template>
    <div>index</div>
</template>
<script>
    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'list'
                });
            }, 2000);
        }
    };
</script>
<style>
    
</style>

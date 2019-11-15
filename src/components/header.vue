<template>
   <div id='div1'>
            <ul>
                <li><a href='#'>首页</a></li>
                <li><a href='#'>活动</a></li>
                <li><a href='#'>咨询</a></li>
                <li><a href='#'>攻略</a></li>
                <li><a href='#'>联系我们</a></li>
                <input type='text' :value='msg'>
            </ul>
        </div>
</template>

<script>
export default {
    computed:{
        msg(){
            return this.$store.state.msg
        }
    }
}
</script>

<style>

</style>
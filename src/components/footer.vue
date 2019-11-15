<template>
   <div id='footer'>
            <ul>
                <li>友情链接1</li>
                <li>友情链接1</li>
                <li>友情链接1</li>
                <li>友情链接1</li>
                <li>友情链接1</li>
            </ul>
            <ul>
                <li>友情链接2</li>
                <li>友情链接2</li>
                <li>友情链接2</li>
                <li>友情链接2</li>
                <li>友情链接2</li>
            </ul>
            <ul>
                <li>友情链接3</li>
                <li>友情链接3</li>
                <li>友情链接3</li>
                <li>友情链接3</li>
                <li>友情链接3</li>
            </ul>
            <input type='text' :value='msg'>
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
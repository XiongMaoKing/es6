<template>
  <div id="article">
    <input type="text" :value='msg' />
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    computed:{
        msg(){
            return this.$store.state.msg
        }
    }
};
</script>

<style>
</style>
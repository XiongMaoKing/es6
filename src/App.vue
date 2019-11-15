<template>
    <div id='app'>
    <input type='button' value='登录' @click='flag=!flag'>
        <div is='login' v-if='flag'></div>
        <div is='vheader'></div>
        <div is='vmain'></div>
        <div is='vfooter'></div>
        </div>
</template>

<script>
import vheader from '@/components/header'
import vmain from '@/components/main'
import vfooter from '@/components/footer'
import login from '@/components/login'
export default {
    name:'App',
    components:{vheader,vmain,vfooter,login},
    data(){
        return{
            flag:false
        }
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

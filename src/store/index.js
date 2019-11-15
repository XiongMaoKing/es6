import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
    strict:true,
    state:{
        msg:''
    },
    mutations:{
        setData(state,val){
            state.msg=val
        }
    },
    actions:{
        sendData(store,val){
            store.commit('setData',val)
        }
    }
})
export default store
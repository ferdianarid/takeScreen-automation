import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const stores = new Vuex.Store({
    state: {
        data: ""
    },
    mutations: {
        setData(state, data) {
            state.data = data
        }
    }
})
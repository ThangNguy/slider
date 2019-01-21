import Vue from 'vue'
import Vuex from 'vuex'
import { setTournaments } from './mutations'
import { getTournaments } from './actions'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        tournaments: null
    },
    mutations: {
        setTournaments
    },
    actions: {
        getTournaments
    }
});

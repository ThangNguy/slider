import Vue from 'vue'
import Vuex from 'vuex'
import { setTournaments } from './mutations'
import { getTournaments } from './actions'


Vue.use(Vuex)

export default new Vuex.Store ({
    state: {       
        tournaments: null,
        tournamentSport: {
            data: [
                {title: 'All', value: 'all'}
            ],
            current: "all"
        },      
        tournamentState: {
            data: [
                {title: 'All', value: 'all'}
            ],
            current: "all"
        },      
        tournamentCity: {
            data: [
                {title: 'All', value: 'all'}
            ],
            current: "all"
        }    
    },
    mutations: {
        setTournaments
    },
    actions: {
        getTournaments      
    }
});

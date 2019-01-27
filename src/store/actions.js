import Axios from 'axios'
import { getTournament } from './config'



export const getTournaments = (context) => {

    Axios.get(getTournament(8))
    .then(response => {
        context.commit('setTournaments', { response });
    })
}

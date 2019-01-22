import _ from 'lodash'

export const setTournaments = (state, payload) => {
    state.tournaments = payload.response.data.results
    console.log(state)
        _.map(state.tournaments, (item) => {
            const isSportExisted = _.findIndex(state.tournamentSport.data, function(o) {
                return o.tittle == item.sport;
            })
            if (isSportExisted === -1) {
                state.tournamentSport.data.push({ tittle: item.sport, value: item.sport.toLowerCase() })
            }
            const isStateExisted = _.findIndex(state.tournamentState.data, function(o) {
                return o.tittle == item.state;
            })
            if (isStateExisted === -1) {
                state.tournamentState.data.push({ tittle: item.state, value: item.state.toLowerCase() })
            }
            const isCityExisted = _.findIndex(state.tournamentCity.data, function(o) {
                return o.tittle == item.city;
            })
            if (isCityExisted === -1) {
                state.tournamentCity.data.push({ tittle: item.city, value: item.city.toLowerCase() })
            }
        })
    
}




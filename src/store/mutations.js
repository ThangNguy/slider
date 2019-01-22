import _ from 'lodash'

export const setTournaments = (state, payload) => {
    state.tournaments = payload.response.data.results
    console.log(state)
        // Hàm map của lodash tạo ra một mảng mới item bằng cách chạy các phần tử trong mảng tournament
        _.map(state.tournaments, (item) => {
            // Hàm findIndex duyệt từng phần tử trong sport trong item, nếu giống tittle trong  state.tournamentSport.data
            // thì trả về giá trị Index
            const isSportExisted = _.findIndex(state.tournamentSport.data, function(o) {
                return o.title === item.sport;
            })
            if (isSportExisted === -1) {
                state.tournamentSport.data.push({ title: item.sport, value: item.sport.toLowerCase() })
            }
            const isStateExisted = _.findIndex(state.tournamentState.data, function(o) {
                return o.title === item.state;
            })
            if (isStateExisted === -1) {
                state.tournamentState.data.push({ title: item.state, value: item.state.toLowerCase() })
            }
            const isCityExisted = _.findIndex(state.tournamentCity.data, function(o) {
                return o.title === item.city;
            })
            if (isCityExisted === -1) {
                state.tournamentCity.data.push({ title: item.city, value: item.city.toLowerCase() })
            }
        })
    
}




export const setTournaments = (state, payload) => {
    state.tournaments = payload.response.data.results
}





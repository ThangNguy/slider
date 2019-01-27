<template>
    <div class="row col">
        <div v-for="(tournament, index) in tournaments" :key="index" v-show="isFilterID(tournament.ID)">
            <h1><strong>{{ tournament.name }}</strong></h1>
            <p><strong>Date: </strong>{{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>
            <p><strong>Location: </strong>{{ tournament.city }} | {{ tournament.state }} </p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "TournamentDetail",
    computed: {
        tournaments() {
            return this.$store.state.tournaments
        }
    },
    methods: {
        isFilterID(tournament){
            if (this.$route.params.tournamentID.toString() === tournament.toString()) {
                return true
            } else {
                return false
            }             
        },
        formatTournamentTime(startDate, endDate) {
            return moment(startDate).format('MMMM, D') + ' - ' + moment(endDate).format('D, YYYY');
        }
    },
    created() {
        this.$store.dispatch('getTournaments')
    }
}
</script>

<style lang="scss" scoped>

</style>
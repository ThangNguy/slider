<template>
    <div class="contain cols-3">
        <div class="row">
            <div class="col">        
            </div>
            <div class="col">
                <div>
                    <TournamentFilter />
                </div>
               <div v-link="'/tournaments/details/95'">User</div>
                <ul class="list-group" v-if="tournaments">
                    <li class="list-group-item active">The are ({{ tournaments.length }}) upcoming tournaments</li> 
                    <li class="list-group-item" v-for="(tournament, index) in tournaments" :key="index" v-show="isValidFilter(tournament)">              
                        <img src="../assets/baseball-icon.svg">           
                        <router-link :to="'/tournaments/details/' + tournament.ID"><p><strong>{{ formatUpperFirstCase(tournament.name.toLowerCase()) }}</strong></p></router-link>
                        <p>{{ tournament.city }}, {{ tournament.state }} &#9679; {{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>                           
                    </li>   
                </ul>
            </div>
            <div class="col">
            </div>  
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import _ from 'lodash'
import TournamentFilter from './TournamentFilter'

export default {
    name: "Tournaments",
    components: {
        TournamentFilter
    },
    computed: {
        tournaments() {
            return this.$store.state.tournaments     
        },
        tournamentSport() {
            return this.$store.state.tournamentSport.data  
        },
        tournamentState() {
            return this.$store.state.tournamentState.data  
        },
        tournamentCity() {
            return this.$store.state.tournamentCity.data  
        }
    },
    methods: {
        isValidFilter(tournament) {
            const currentSport = this.$store.state.tournamentSport.current
            const currentState = this.$store.state.tournamentState.current
            const currentCity = this.$store.state.tournamentCity.current

            if ((currentSport === 'all' || currentSport === tournament.sport.toLowerCase()) &&
            (currentState === 'all' || currentState === tournament.state.toLowerCase()) &&
            (currentCity === 'all' || currentCity === tournament.city.toLowerCase())) {
                return true
            }
            return false;
        },
        formatTournamentTime(startDate, endDate) {
            return moment(startDate).format('MMMM, D') + ' - ' + moment(endDate).format('D, YYYY');
        },
        formatUpperFirstCase(str) {
            return _.startCase(str)
        }          
    },
    created() {
        this.$store.dispatch('getTournaments')
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$main-color: black;

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-group-item {
    margin-bottom: 20px;
    img {
        position: absolute;
        left: 5%;
        margin-top: 10px;
    }
    p {
        text-align: left;
        margin-left: 8%;
        margin-bottom: 0px;
    }
}
.list-group {
    .list-group-item {
        p {
            strong {
                color: $main-color;
            }
        }
    }

}
.active {
    margin-bottom: 0px;
    background-color: white;
    color: black;
    text-align: left;
    border-color: white;
}



</style>

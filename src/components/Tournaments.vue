<template>
    <div class="contain">
        <ul class="list-group" v-if="tournaments">
            <li class="list-group-item active">The are ({{ tournaments.length }}) upcoming tournaments</li>      
            <li class="list-group-item" v-for="(tournament, index) in tournaments" :key="index">              
                    <img src="../assets/baseball-icon.svg">           
                    <p><strong>{{ tournament.name }}</strong></p>
                    <p>{{ tournament.city}}, {{ tournament.state }} &#9679; {{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>
                
            </li>    
        </ul>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: "Tournaments",
    computed: {
        tournaments() {
            return this.$store.state.tournaments
        }
    },
    methods: {
        formatTournamentTime(startDate, endDate) {
            return moment(startDate).format('MMMM, D') + ' - ' + moment(endDate).format('D, YYYY');
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
        left: 20%;
        margin-top: 10px;
    }
    p {
        text-align: left;
        margin-left: 25%;
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
.list-group {
    margin-left: 25%;
    max-width: 50%;
}
.contain {
    text-align: center;
}
.col-icon {
   
}
.col-text {
   
}
</style>

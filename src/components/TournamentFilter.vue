<template>
    <div class="row row-select">
        <div class="col col-select">
            <label for="tournamentfilterSport">Sport</label>
            <select class="custom-select" v-model="currentSport" @change="selectSport">
                <option v-for="(option, index) in tournamentSport" :key="index" :value="option.value"> {{ option.title }} </option>
            </select>
        </div>
        <div class="col col-select">
            <label for="tournamentfilter">State</label>
            <select class="custom-select" v-model="currentState" @change="selectState">
                <option v-for="(option, index) in tournamentState" :key="index" :value="option.value"> {{ option.title }} </option>
            </select>
        </div>
        <div class="col col-select" >
            <label for="tournamentfilterCity">City</label>
            <select class="custom-select" v-model="currentCity" @change="selectCity">
                <option v-for="(option, index) in tournamentCity" :key="index" :value="option.value"> {{ option.title }} </option>
            </select>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import _ from 'lodash'


export default {
    name: "TournamentFilter",
    data() {
        return {
            currentSport: "",
            currentCity: "",
            currentState: ""
        }
    },
    computed: {
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
        selectSport(event) {
            this.$store.commit('setCurrentSport', this.currentSport)                      
        },
        selectCity(event) {
            this.$store.commit('setCurrentCity', this.currentCity)
        },
        selectState(event) {
            this.$store.commit('setCurrentState', this.currentState)
        }
    },
    created() {
        this.$store.dispatch('getTournaments')
        this.currentSport = this.$store.state.tournamentSport.current
        this.currentCity = this.$store.state.tournamentCity.current
        this.currentState = this.$store.state.tournamentState.current
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

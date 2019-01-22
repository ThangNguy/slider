<template>
    <div class="contain cols-3">
        <div class="row">
            <div class="col">
            </div>
            <div class="col">
                <div>
                    <div class="row row-select">
                        <div class="col col-select">
                            <label for="tournamentfilterSport">Sport</label>
                            <select class="custom-select" v-model="tournamentFilterSport">
                                <option v-for="(option, index) in tournamentSport" :key="index"> {{ option.title }} </option>
                            </select>
                        </div>
                        <div class="col col-select">
                            <label for="tournamentfilter">State</label>
                            <select class="custom-select" v-model="tournamentFilterState">
                                <option v-for="(option, index) in tournamentState" :key="index"> {{ option.title }} </option>
                            </select>
                        </div>
                        <div class="col col-select">
                            <label for="tournamentfilterCity">City</label>
                            <select class="custom-select" v-model="tournamentFilterCity">
                                <option v-for="(option, index) in tournamentCity" :key="index"> {{ option.title }} </option>
                            </select>
                        </div>
                    </div>
                </div>
                <ul class="list-group" v-if="tournaments">
                    <li class="list-group-item active">The are ({{ filterTournament.length }}) upcoming tournaments</li>      
                    <li class="list-group-item" v-for="(tournament, index) in filterTournament" :key="index">              
                            <img src="../assets/baseball-icon.svg">           
                            <p><strong>{{ formatUpperFirstCase(tournament.name.toLowerCase()) }}</strong></p>
                            <p>{{ tournament.city}}, {{ tournament.state }} &#9679; {{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>
                            
                    </li>    
                </ul>
            </div>
            <div class="col">
            </div>  
        </div>
        <!-- <div class="col-sm-6 col-offset-sm-3">
          <h1> {{ heading }} </h1>
          <div class="form-group" v-for="(n,index) in count" :key="index">
          </div>
          <div class="form-group">
              <label for="Make">Make</label>
              <select class="form-control" name="make" id="make" v-model="make">
                  <option :value="null" disabled selected>Select Make</option>
                  <option v-for="(option, index) in makes_options" :key="index" :value="option.id"> {{ option.text }} </option>
              </select>
          </div>
          <div class="form-group">
              <label for="Model">Model</label>
              <select class="form-control" name="model" id="model" v-model="model">
                  <option :value="null" disabled selected>Select Model</option>
                  <option v-for="(option, index) in model_options[make]" :key="index" :value="option.id"> {{ option.text }} </option>
              </select>
          </div>
        </div> -->
    </div>
</template>

<script>

import moment from 'moment'
import _ from 'lodash'

export default {
    name: "Tournaments",
    data() {
        return {
        tournamentFilterSport: "All",
        tournamentFilterState: "All",
        tournamentFilterCity: "All"
        }
    },
    computed: {
        tournaments() {
            return this.$store.state.tournaments     
        },
        tournamentSport() {
            return this.$store.state.tournamentSport.data  
        },
        tournamentState() {
            // console.log(this.$store.state.tournamentState)
            return this.$store.state.tournamentState.data  
        },
        tournamentCity() {
            return this.$store.state.tournamentCity.data  
        },

        filterTournament() {
            return this.$store.state.tournaments.filter((o) => {
                if(this.tournamentFilterSport !== "All"){
                    return 
                        o.city.toLowerCase().includes(this.tournamentFilterCity.toLowerCase()) &&
                        o.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase())
                }   else if (this.tournamentFilterState !== "All"){
                    return 
                        o.city.toLowerCase().includes(this.tournamentFilterCity.toLowerCase()) &&
                        o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                }   else if (this.tournamentFiltercity !== "All"){
                    return 
                        o.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase()) &&
                        o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                }   else if (this.tournamentFilterSport !== "All" & this.tournamentFilterState !== "All") {
                        return 
                            o.city.toLowerCase().includes(this.tournamentFilterCity.toLowerCase())
                }   else if (this.tournamentFilterCity !== "All" & this.tournamentFilterState !== "All") {
                        return 
                            o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                }   else if (this.tournamentFilterCity !== "All" & this.tournamentFilterState !== "All") {
                        return 
                            o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                }   else if (this.tournamentFilterCity !== "All" & this.tournamentFilterState !== "All" & this.tournamentFilterSport !== "All"){
                        return
                            o
                }   else {
                    return  o.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase()) &&
                            o.city.toLowerCase().includes(this.tournamentFilterCity.toLowerCase()) &&
                            o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                }
                // if (this.tournamentFilterState !== "All" && this.tournamentFilterCity !== "All" && this.tournamentFilterSport){
                //     return o.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase()) &&
                //         o.city.toLowerCase().includes(this.tournamentFilterCity.toLowerCase()) &&
                //         o.sport.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                // } else {
                    // return o
                
                
            })
        },
        filterTounemantState() {
            return this.$store.state.tournaments.filter((o) => {
                if (this.tournamentFilterState !== "All"){
                    return o.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase())
                } else {
                    return o
                }
                
            })
        },
        filterTounemantCity() {
            return this.$store.state.tournaments.filter((tournament) => {
                if (this.tournamentFilterCity !== "All"){
                    return tournament.state.toLowerCase().includes(this.tournamentFilterCity.toLowerCase())
                } else {
                    return tournament
                }
                
            })
        },
        filterTounemantSport() {
            return this.$store.state.tournaments.filter((tournament) => {
                if (this.tournamentFilterSport !== "All"){
                    return tournament.state.toLowerCase().includes(this.tournamentFilterSport.toLowerCase())
                } else {
                    return tournament
                }
                
            })
        }
    },
    methods: {
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

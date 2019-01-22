<template>
    <div class="contain">
        <div>
            <label for="tournamentfilter">State</label>
            <select class="custom-select" v-model="tournamentFilterState">
                <option v-for="(option, index) in tournamentState" :key="index"> {{ option.tittle }} </option>
            </select>
        </div>
        <ul class="list-group" v-if="tournaments">
            <li class="list-group-item active">The are ({{ filterTounemantCity.length }}) upcoming tournaments</li>      
            <li class="list-group-item" v-for="(tournament, index) in filterTounemantCity" :key="index">              
                    <img src="../assets/baseball-icon.svg">           
                    <p><strong>{{ tournament.name }}</strong></p>
                    <p>{{ tournament.city}}, {{ tournament.state }} &#9679; {{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>
                    
            </li>    
        </ul>
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

export default {
    name: "Tournaments",
    data() {
        return {
        tournamentFilterState: "",
        }
    },
    computed: {
        tournaments() {
            return this.$store.state.tournaments     
        },
        tournamentState() {
            console.log(this.$store.state.tournamentState)
            return this.$store.state.tournamentState.data  
        },
        // filterTournament() {
        //     return this.$store.state.tournaments.filter((tournament) => {
        //         return  tournament.state.toLowerCase().includes(this.search.toLowerCase())
        //     });
        // }
        filterTounemantCity() {
            return this.$store.state.tournaments.filter((tournament) => {
                if( this.tournamentFilterState != "All"){
                return tournament.state.toLowerCase().includes(this.tournamentFilterState.toLowerCase())
                } else {
                    return tournament
                }
                
            })
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
.form-group {
    width: 30%;
    align-items: center;
}
</style>

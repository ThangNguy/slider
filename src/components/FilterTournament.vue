<template>
    <div class="container" id="app">
        <div class="col-sm-6 col-offset-sm-3">
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
        </div>
    </div>
</template>
<script>

import moment from 'moment'


export default {
    name: 'FilterTournament',
    data() {
        return {
            heading: 'Filter',
            make: null,
            makes_options: [],
            model: null,
            model_options: {}
        }
    },
    methods: {
        init() {
            this.makes_options = [
                {text: 'Honda', id: 1},
                {text: 'Toyota', id: 2},
                {text: 'Nissan', id: 3},
                {text: 'Suzuki', id: 4}
            ];
            this.model_options = {
                1: [{
                    text: "Accord",
                    id: 1
                }, {
                    text: "Civic ",
                    id: 2
                }],
                2: [{
                    text: "Camry",
                    id: 1
                }, {
                    text: "Corola ",
                    id: 2
                }],
                3: [{
                    text: "Altima",
                    id: 1
                }, {
                    text: "Zuke ",
                    id: 2
                }],
                4: [{
                    text: "Alto",
                    id: 1
                }, {
                    text: "Swift",
                    id: 2
                }]
            }
        },
    },
    created: function(){
        this.init();    
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

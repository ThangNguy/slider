<template>
    <div class="row">
        <div class="col-sm-6" v-for="(category, index) in categoryDetail" :key="index">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ category.API }}</h5>
                <p class="card-text">{{ category.Description }}</p>
                <a :href="category.Link" class="btn btn-primary">Go somewhere</a>                            
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'CategoryDetail',
    data() {
        return {
            categoryDetail: null
        }
    },
    methods: {
        getCategory() {
          if (this.$route.params.name) {
            let categoryName = this.$route.params.name
            Axios
              .get(`https://api.publicapis.org/entries?category=${categoryName}&https=true`)
              .then((response) => {
                  if (response.data) {
                      this.categoryDetail = response.data.entries
                      console.log(this.categoryDetail)
                  }
              })
          }
          
        }
    },    
    created: function() {
      this.getCategory();    
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>


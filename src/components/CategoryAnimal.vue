
<template>
    <div class="row">
        <div class="col-sm-6" v-for="(category, index) in categories" :key="index">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ category }}</h5>
                <!-- <a :href="category.Link" class="btn btn-primary">Go somewhere</a> -->
                <!-- <router-link :to="'/cat/' + getCategoryAlias(category)">Detail</router-link> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'CategoryAnimal',
    data() {
        return {
            categories: null
        }
    },
    methods: {
        getNews() {
            Axios
                .get('https://api.publicapis.org/entries?category')
                .then((response) => {
                    if (response.data) {
                        this.categories = response.data
                        console.log(response)
                    }
                })
        }
        // getCategoryAlias(cat) {
        //     return cat.toLowerCase();
        // }
    },    
    created: function(){
        this.getNews();    
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

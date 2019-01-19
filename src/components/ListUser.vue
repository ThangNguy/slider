
<template>
    <div class="row">
        <div class="col-sm-6" v-for="(user, index) in users" :key="index">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ user.first_name }}</h5>
                <button type="button" @click="deleteUser(index)" >Delete</button>
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
    name: 'ListUser',
    data() {
        return {
            users: null,
            id: ''
        }
    },
    methods: {
        getUsers() {
            Axios
                .get('https://reqres.in/api/users?page=2')
                .then((response) => {
                    if (response.data.data) {
                        this.users = response.data.data
                        console.log(response)
                    }
                })
        },
        deleteUser(index) {
            Axios
                .delete('https://reqres.in/api/api/users/2/')
                .then((response) => {               
                    this.users.splice(index, 1)                                 
                })
        }
        // getCategoryAlias(cat) {
        //     return cat.toLowerCase();
        // }
    },    
    created: function(){
        this.getUsers();    
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

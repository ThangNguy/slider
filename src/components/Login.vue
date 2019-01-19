<template>
    <form method="Post">
        <div id="login">
            <h1>Login</h1>
            <input type="text" name="email" v-model="login.email" placeholder="Email" required/>
            <input type="password" name="password" v-model="login.password" placeholder="Password" required/>
            <button type="button" v-on:click="logItIn()">Login</button>
            <button type="button" v-on:click="replaced()">replaced</button>
        </div>      
    </form>
    
</template>

<script>
import Axios from "axios";
export default {
  name: "Login",
  data() {
    return {
        login: {
        email: "",
        password: ""
        },
        str: "a b c"      
    };
  },
  methods: {
    logItIn() {
      Axios.post("https://reqres.in/api/login", this.login)
      .then(response => {
        let token = response.data.token;

        localStorage.setItem('token',token);

        // this.$router.push('/cat');
      });
    },
    replaced() {
        return console.log(this.str.split(' ').join('+'))
    }
  }   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

<template>
  <div id="app">{{ registerIT() }}</div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Partner",
  data() {
    return {
        register: {
            email: null,
            password: null,
        },
        log: null
    };
  },
  methods: {
    registerIT() {
      Axios
      .get("https://a109b1b9.ngrok.io/api/v3/partners/8/tournaments")
      .then(response => {
        console.log(response)
      });
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

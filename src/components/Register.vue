<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <form method="post">
          <div class="card border-primary rounded-0">
            <div class="card-header p-0">
              <div class="bg-info text-white text-center py-2">
                <h3>
                  <i class="fa fa-envelope"></i> Register
                </h3>
              </div>
            </div>
            <div class="card-body p-3">
              <!--Body-->
              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-user text-info"></i>
                    </div>
                  </div>
                  <input type="text" v-model="register.email" class="form-control" placeholder="you@example.com" required >
                </div>
              </div>
              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-envelope text-info"></i>
                    </div>
                  </div>
                  <input
                    type="password" v-model="register.password" class="form-control" placeholder="Password" required
                  >
                </div>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  @click="registerIT();"
                  class="btn btn-info btn-block rounded-0 py-2"
                >Submit</button>
              </div>
            </div>
          </div>
        </form>
        <!--Form with header-->
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Register",
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
      Axios.post("https://reqres.in/api/register", this.register)
      .then(response => {
        let token = response.data.token;

        localStorage.setItem('token',token);
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

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
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    placeholder="Name"
                    required
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-envelope text-info"></i>
                    </div>
                  </div>
                  <input type="text" v-model="job" class="form-control" placeholder="Job" required>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  @click="postData();"
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
  name: "User",
  data() {
    return {
      name: null,
      job: null,
      log: null
    };
  },
  methods: {
    postData() {
      Axios.post("https://reqres.in/api/users", {
        name: this.name,
        job: this.job
      }).then(response => {
        console.log(response);
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

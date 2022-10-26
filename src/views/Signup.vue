<template>
  <form @click.prevent>
    <div class="g-3 align-item-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Name"
          v-model="name"
        />
        <span class="error-feedback" v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</span>
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
        <span class="error-feedback" v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your password"
          v-model="pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error">{{v$.pass.$errors[0].$message}}</span>
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="signUpNow()" class="btn btn-primary">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUpPage",
  data() {
    return {
      v$: useValidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required },
      pass: { required, minLength:minLength(6)},
      email: { required, email },
    };
  },
  methods:{
  async signUpNow(){
    this.v$.$validate();
    if(!this.v$.$error){
        console.log("form Validated Successfully");
       let result = await axios.post('url','passParam');
    }else{
        console.log("form Validation Failed");
    }
  },
},
};
</script>

<style lang="scss" scoped>
.error-feedback{
  color:red;
  font-size: 0.85em;
}
</style>
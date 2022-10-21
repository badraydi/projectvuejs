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
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your password"
          v-model="pass"
        />
      </div>
      <br />
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="signUpNow()" class="btn btn-primary">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
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
      pass: { required },
    };
  },
  methods:{
  signUpNow(){
    this.v$.$validate();
    if(!this.v$.$error){
        console.log("form Validated Successfully");
    }else{
        console.log("form Validation Failed");
    }
  },
},
};
</script>
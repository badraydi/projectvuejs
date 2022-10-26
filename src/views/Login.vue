<template>
    <form @click.prevent>
      <div class="g-3 align-item-center">
      <h1>Login</h1>
      <div class="col-auto d-block mx-auto">
          <input type="email" class="form-control" placeholder="Enter Your Email" v-model="state.email">
          <span class="error-feedback" v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>
      </div>
      <br>
      <div class="col-auto d-block mx-auto">
          <input type="password" class="form-control" placeholder="Enter Your password" v-model="state.pass">
          <span class="error-feedback" v-if="v$.pass.$error">{{v$.pass.$errors[0].$message}}</span>
      </div>
      <br>
      <div class="col-auto d-block mx-auto">
          <button type="submit"  @click="userLogin()" class="btn btn-primary">Login</button>
      </div>
    </div>
    </form>
  </template>
  
  <script>
  import useValidate from '@vuelidate/core';
  import { required, email } from "@vuelidate/validators";
  import { reactive, computed } from 'vue';
  export default {
    name: "LogInPage",
    //compostion API
    setup(){
      //data
      const state = reactive({
        pass:"",
        email:"",
      });
      //validations
      const rules = computed( () => {
        return{
          email: {required, email},
          pass: {required},
        }
      });

      const v$ = useValidate(rules, state);
      return {
        state, v$,
      };
    },
    data(){
      return{

    };
  },
  methods:{
    userLogin(){
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
  
<style lang="scss" scoped>
.error-feedback{
  color:red;
  font-size: 0.85em;
}
</style>
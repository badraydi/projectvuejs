<template>
    <form @click.prevent>
      <div class="g-3 align-item-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
          <input type="email" class="form-control" placeholder="Enter Your Email" v-model="email">
      </div>
      <br>
      <div class="col-auto d-block mx-auto">
          <input type="password" class="form-control" placeholder="Enter Your password" v-model="pass">
      </div>
      <br>
      <div class="col-auto d-block mx-auto">
          <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </div>
    </form>
  </template>
  
  <script>
  export default {
    name: "LogInPage",
    data(){
      return{
      pass:"",
      email:"",
    };
  },
  };
  </script>
  
  
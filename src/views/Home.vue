<template>
  <RouterView />
  <div>
    <NavbarAuth />
  </div>
  <img src="../../public/image/vuejs.jpg" />
</template>

<script>
import NavbarAuth from "../components/Header/NavbarAuth.vue";
export default {
  name: "Home",
  components: { NavbarAuth },
};
</script>

<style>
</style>

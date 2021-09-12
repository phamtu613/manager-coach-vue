<template>
  <div id="app">
    <the-heading />
    <div class="body">
      <router-view> </router-view>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeading from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  components: {
    TheHeading,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

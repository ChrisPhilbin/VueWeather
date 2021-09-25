<template>
  <GetForecast />
</template>

<script>
import GetForecast from "./components/GetForecast.vue";

export default {
  name: "App",
  components: {
    GetForecast,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  background-color: #acadbc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

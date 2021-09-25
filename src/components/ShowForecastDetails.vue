<template>
  <div class="dayDetails">
    <img v-bind:src="day.icon" v-bind:alt="day.shortForecast" />
    {{ day.name }}<br />
    {{ day.shortForecast }}<br />
    {{ day.detailedForecast }}<br />
  </div>
</template>

<script>
export default {
  props: ["day"],
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style>
.dayDetails {
  background-color: #9b9ece;
  color: #000500;
  border-radius: 15px;
  border-color: black;
  padding: 10px;
  margin: 8px;
}
</style>

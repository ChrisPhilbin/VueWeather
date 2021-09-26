<template>
  <div class="dayDetails">
    <span>
      <img
        v-bind:src="day.icon"
        v-bind:alt="day.shortForecast"
        class="forecastImage"
      />
    </span>

    <span class="dayText">
      <h3>{{ day.name }}</h3>
      <br />
      {{ day.shortForecast }}<br />
      {{ day.detailedForecast }}<br />
    </span>
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
h3 {
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 0px;
}
.dayDetails {
  background-color: #9b9ece;
  color: #000500;
  border-radius: 15px;
  border-color: black;
  display: flex;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  margin: 8px;
}
.dayText {
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.forecastImage {
  display: inline-block;
  align-content: center;
  vertical-align: middle;
}
</style>

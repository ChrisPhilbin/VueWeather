<template>
  <div class="dayDetails">
    <span class="helper">
      <img
        v-bind:src="day.icon"
        v-bind:alt="day.shortForecast"
        class="forecastImage"
      />
    </span>

    <span class="dayText">
      {{ day.name }}<br />
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
.dayDetails {
  background-color: #9b9ece;
  color: #000500;
  border-radius: 15px;
  border-color: black;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  margin: 8px;
}
.dayText {
  margin-left: 100px;
  vertical-align: top;
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.forecastImage {
  float: left;
  margin-right: 10px;
  vertical-align: middle;
  max-height: 86px;
}
</style>

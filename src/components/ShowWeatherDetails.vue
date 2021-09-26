<template>
  <div id="forecastDetails">
    <h2>Currently in {{ currentWeatherResponseData.name }}</h2>
    <div id="currentConditions">
      <h4>{{ currentWeatherResponseData.weather[0].main }}</h4>
      <span class="currentConditions">Temperature:</span>
      {{ Math.round(currentWeatherResponseData.main.temp) }}<br />
      <span class="currentConditions">Feels like:</span>
      {{ Math.round(currentWeatherResponseData.main.feels_like) }}<br />
      <span class="currentConditions">Humidity:</span>
      {{ currentWeatherResponseData.main.humidity }}%<br />
      <span class="currentConditions">Wind speed:</span>
      {{ Math.round(currentWeatherResponseData.wind.speed) }} mph<br />
      <span
        v-if="currentWeatherResponseData.wind.gust"
        class="currentConditions"
        >Wind gust:
        {{ Math.round(currentWeatherResponseData.wind.gust) }} mph<br
      /></span>
    </div>
    <div id="currentForecast">
      <ShowForecastDetails
        v-for="day in currentForecast"
        v-bind:key="day.name"
        v-bind:day="day"
      />
    </div>
  </div>
</template>

<script>
import ShowForecastDetails from "./ShowForecastDetails.vue";
export default {
  props: ["currentWeatherResponseData"],
  components: {
    ShowForecastDetails,
  },
  data() {
    return {
      currentForecast: [],
      currentForecastIsLoading: false,
      currentForecastFinishedLoading: false,
    };
  },
  methods: {},
  async created() {
    document.title = `Currently in ${this.currentWeatherResponseData.name}`;
    let { lat, lon } = this.currentWeatherResponseData.coord;
    try {
      this.currentForecastIsLoading = true;
      let response = await fetch(
        `https://api.weather.gov/points/${lat},${lon}`
      );
      let data = await response.json();
      let forecastURL = data.properties.forecast;
      try {
        let gridpointsResponse = await fetch(`${forecastURL}`);
        let gridpointsData = await gridpointsResponse.json();
        this.currentForecast = gridpointsData.properties.periods;
        this.currentForecastIsLoading = false;
        this.currentForecastFinishedLoading = true;
      } catch (error) {
        console.log(error, "Something went wrong");
        this.currentForecastIsLoading = false;
      }
    } catch (error) {
      console.log(error, "Something went wrong");
      this.currentForecastIsLoading = false;
    }
  },
  mounted() {},
};
</script>

<style>
#currentConditions {
  color: white;
}
#forecastDetails {
  background-color: #6665dd;
  width: 500px;
  padding: 20px;
  border-radius: 15px;
  margin: auto;
  margin-top: 15px;
}
h2 {
  color: #000500;
}
</style>

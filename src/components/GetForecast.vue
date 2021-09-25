<template>
  <div id="weather">
    <input type="text" id="zipInput" maxlength="5" v-model="zipCode" />
    <button id="loadWeatherButton" @click="getWeather(zipCode)">
      Get weather
    </button>
    <div v-if="loadingWeather">
      <h4>Loading... Please Wait...</h4>
    </div>
  </div>
  <div>
    <ShowWeatherDetails
      v-bind:currentWeatherResponseData="currentWeatherResponseData"
      v-if="currentWeatherLoaded"
    />
  </div>
</template>

<script>
import ShowWeatherDetails from "./ShowWeatherDetails.vue";

export default {
  components: {
    ShowWeatherDetails,
  },
  data() {
    return {
      currentWeatherResponseData: {},
      currentWeatherLoaded: false,
      loadingWeather: false,
      zipCode: "",
    };
  },
  methods: {
    async getWeather(zipCode) {
      if (this.zipCode.length !== 5 || !/^\d{5}$/.test(zipCode)) {
        alert("Must provide valid 5 digit US zip code.");
        return;
      }
      try {
        this.loadingWeather = true;
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}`
        );
        this.currentWeatherResponseData = await response.json();
        this.loadingWeather = false;
        this.currentWeatherLoaded = true;
        this.zipCode = "";
      } catch (error) {
        console.log(error, "Something went wrong.");
        this.loadingWeather = false;
      }
    },
  },
  created() {},
};
</script>

<style>
#weather {
  padding: 20px;
  width: 500px;
  margin: auto;
  background-color: #6665dd;
  border-radius: 15px;
  border-color: black;
}
#zipInput {
  padding: 10px;
  margin: 10px;
  font-size: large;
  width: 50px;
}
#loadWeatherButton {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #9b9ece;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
</style>

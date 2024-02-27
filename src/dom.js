import api from "./api";

const handleDom = (() => {
  const celsius = "\u00B0";
  const weatherCondition = document.querySelector(".weather-condition");
  const weatherLocation = document.querySelector(".weather-location");
  const weatherLocationLocaltime = document.querySelector(
    ".weather-location-localtime"
  );
  const weatherTemperature = document.querySelector(".weather-temperature");
  const weatherFeelslike = document.querySelector(".feelslike");
  const weatherHumidity = document.querySelector(".humidity");
  const weatherWind = document.querySelector(".wind");

  async function displayWeatherInformation() {
    try {
      const processedData = await api.handleWeatherData();
      weatherCondition.textContent = processedData.condition;
      weatherLocation.textContent = processedData.location;
      weatherLocationLocaltime.textContent = processedData.localTime;
      weatherTemperature.textContent = `${
        processedData.temperature + celsius
      }C`;
      weatherFeelslike.textContent = processedData.temeratureFeelsLike;
      weatherHumidity.textContent = processedData.humidity;
      weatherWind.textContent = processedData.wind;
    } catch (error) {
      console.log("An error has occured: ", error);
    }
  }

  displayWeatherInformation();
  return { displayWeatherInformation };
})();

export default handleDom;

import api from "./api";

const handleDom = (() => {
  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".search");
  const celsius = "\u00B0";
  const weatherCondition = document.querySelector(".weather-condition");
  const weatherLocation = document.querySelector(".weather-location");
  const weatherLocationLocaltime = document.querySelector(
    ".weather-location-localtime"
  );
  const weatherTemperature = document.querySelector(".weather-temperature");

  async function displayWeatherInformation() {
    try {
      const processedData = await api.handleWeatherData();
      weatherCondition.textContent = processedData.condition;
      weatherLocation.textContent = processedData.location;
      weatherLocationLocaltime.textContent = processedData.localTime;
      weatherTemperature.textContent = `${
        processedData.temperature + celsius
      }C`;
    } catch (error) {
      console.log("An error has occured: ", error);
    }
  }
  searchBtn.addEventListener("click", () => {
    const location = searchBar.value;
    console.log(location);
  });
  displayWeatherInformation();
  return {};
})();

export default handleDom;

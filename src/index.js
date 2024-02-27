import api from "./api";
import handleDom from "./dom";

document.addEventListener("DOMContentLoaded", () => {
  api.handleWeatherData();
  handleDom.displayWeatherInformation();
});

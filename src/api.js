const api = (() => {
  // const searchBar = document.querySelector(".search-bar");
  const location = prompt("City: ");
  const apiKey = "f6e410436a0749ddb08115726242602";

  async function getWeatherData() {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
        { mode: "cors" }
      );
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  function processWeatherData(weatherData) {
    const processedData = {
      location: weatherData.location.name,
      localTime: weatherData.location.localtime,
      temperature: weatherData.current.temp_c,
      temeratureFeelsLike: weatherData.current.feelslike_c,
      condition: weatherData.current.condition.text,
      conditionIcon: weatherData.current.condition.icon,
      wind: weatherData.current.wind_kph,
      humidity: weatherData.current.humidity,
    };
    return processedData;
  }
  async function handleWeatherData() {
    try {
      const weatherData = await getWeatherData();
      const processedData = processWeatherData(weatherData);
      return processedData;
      // console.log(processedData);
    } catch (error) {
      console.log("An error occured: ", error);
    }
  }

  return { getWeatherData, handleWeatherData, processWeatherData };
})();

export default api;

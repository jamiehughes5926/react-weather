import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4a52fbf6cb731053f0c9f50e2cca5e56";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};

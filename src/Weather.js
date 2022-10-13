import { useState } from "react";
import { fetchWeather } from "./API/fetchWeather";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [Weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="Container">
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {Weather.main && (
        <>
          <h1 className="title">Weather</h1>
          <div className="temp-container">
            <div className="Location">
              {Weather.name},{Weather.sys.country}
              <h3 className="temp">
                <img
                  className="city-icon"
                  src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}
                  alt={Weather.weather[0].description}
                />
                <p className="Description">{Weather.weather[0].description}</p>
                {Weather.main.temp} <sup>°c</sup>
              </h3>
            </div>
          </div>
          <div className="grid2x2">
            <div className="box 1">Feels like: {Weather.main.feels_like}°c</div>
            <div className="box 2">Humidty: {Weather.main.humidity}%</div>
            <div className="box 3">Sunset: {Weather.sys.sunset}</div>
            <div className="box 4">Sunrise: {Weather.sys.sunrise}</div>
          </div>
        </>
      )}
    </div>
  );
}

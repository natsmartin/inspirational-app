import React from "react";

function WeatherInfo({ weather }) {
  return (
    <div className="flex text-center justify-center items-center mx-2">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="current weather icon"
      />
      <div className="text-white">
        <p className="text-3xl font-semibold">
          {weather.main.temp}°
        </p>
        <p className="capitalize">{weather.weather[0].description}</p>
        <p className="capitalize">{weather.name + ',' + weather.sys.country}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;

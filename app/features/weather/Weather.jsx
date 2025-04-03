"use client";

import React, { useState, useEffect, Suspense } from "react";
import { getWeather } from "@api/WeatherAPI";
import Loading from "@app/loading";
import WeatherInfo from "@features/weather/WeatherInfo";

function Weather() {
  const [weather, setWeather] = useState({
    weather: [{ description: "few clouds", icon: "02d" }],
    main: { temp: "0.00" },
  });
  const [city, setCity] = useState("Manila");
  const [state, setState] = useState("Manila");

  useEffect(() => {
    async function fetchWeather() {
      const response = await getWeather(city, state);
      setWeather(response);
      console.log(response);
    }
    fetchWeather();
  }, [city, state]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (
      !document.getElementById("city-input").value ||
      !document.getElementById("state-input").value
    ) {
      window.alert("Please enter a valid city and state.");
      return;
    } else {
      setCity(formData.get("city"));
      setState(formData.get("state"));
    }
  };

  const handleSubmit = () => {
    if (
      !document.getElementById("city-input").value ||
      !document.getElementById("state-input").value
    ) {
      return;
    }
  };

  return (
    <div className="flex self-end">
      <Suspense fallback={<Loading />}>
        <WeatherInfo weather={weather} />
      </Suspense>
      <form className="*:m-1 mx-2 flex flex-col" onSubmit={handleFormSubmit}>
        <div className="flex">
          <label htmlFor="city" className="flex items-center font-semibold mx-2">
            City
          </label>
          <input
            id="city-input"
            type="text"
            name="city"
            className="px-2 border-1 border-slate-500 rounded-md"
          ></input>
        </div>
        <div className="flex">
          <label htmlFor="state" className="flex items-center font-semibold mx-1">
            State
          </label>
          <input
            id="state-input"
            type="text"
            name="state"
            className="px-2 border-1 border-slate-500 rounded-md"
          ></input>
        </div>
        <button
          type="submit"
          className="border-2 bg-blue-400 text-white font-semibold border-slate-500 p-1 rounded-sm hover:cursor-pointer hover:border-slate-700"
          onClick={handleSubmit}
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Weather;

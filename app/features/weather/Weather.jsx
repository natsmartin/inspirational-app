"use client";

import React, { useState, useEffect, Suspense } from "react";
import { getWeather } from "@api/WeatherAPI";
import Loading from "@app/loading";
import WeatherInfo from "@features/weather/WeatherInfo";

function Weather() {
  const [weather, setWeather] = useState({
    weather: [{ description: "--", icon: "02d" }],
    main: { temp: "0.00" },
    name: "--",
    sys: { country: "--" },
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
    <div className="flex self-end p-5 bg-[rgba(0,0,0,0.4)]">
      <Suspense fallback={<Loading />}>
        <WeatherInfo weather={weather} />
      </Suspense>
      <form className="*:m-1 mx-2 flex flex-col" onSubmit={handleFormSubmit}>
        <div className="flex">
          <label
            htmlFor="city"
            className="flex items-center font-semibold mx-2 text-white"
          >
            City
          </label>
          <input
            id="city-input"
            type="text"
            name="city"
            className="px-2 border-1 border-slate-500 rounded-md bg-slate-300"
          ></input>
        </div>
        <div className="flex">
          <label
            htmlFor="state"
            className="flex items-center font-semibold mx-1 text-white"
          >
            State
          </label>
          <input
            id="state-input"
            type="text"
            name="state"
            className="px-2 border-1 border-slate-500 rounded-md bg-slate-300"
          ></input>
        </div>
        <button
          type="submit"
          className="border-2 bg-blue-400 text-white font-semibold border-slate-500 p-1 
            rounded-sm hover:cursor-pointer hover:border-slate-700 transition-all"
          onClick={handleSubmit}
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Weather;

"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WeatherList from "@/components/WeatherList";

type WeatherData = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=26.14&longitude=91.74&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError("Unable to load weather data.");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>

        <p className="mt-6 text-2xl font-semibold text-sky-700">
          Fetching Weather...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center">
          <h2 className="text-3xl font-bold text-red-500">
            Oops!
          </h2>

          <p className="mt-4 text-gray-700">
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10">
      <div className="max-w-6xl mx-auto">

        <Header />

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center text-sky-800 mb-10">
            7-Day Forecast
          </h2>

          {weather && <WeatherList weather={weather} />}

        </div>

      </div>
    </main>
  );
}
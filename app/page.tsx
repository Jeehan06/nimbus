"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import WeatherList from "@/components/WeatherList";

type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
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
          "https://api.open-meteo.com/v1/forecast?latitude=26.14&longitude=91.74&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
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

  function getWeatherDescription(code: number) {
    if ([0].includes(code)) return "Clear Sky";
    if ([1, 2].includes(code)) return "Partly Cloudy";
    if ([3].includes(code)) return "Cloudy";
    if ([45, 48].includes(code)) return "Fog";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
      return "Rain";
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return "Snow";
    if ([95, 96, 99].includes(code))
      return "Thunderstorm";

    return "Fair";
  }

  function getWeatherIcon(code: number) {
    if (code === 0) return "☀";
    if ([1, 2].includes(code)) return "⛅";
    if (code === 3) return "☁";
    if ([45, 48].includes(code)) return "🌫";
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
      return "🌧";
    if ([71, 73, 75, 77, 85, 86].includes(code))
      return "❄";
    if ([95, 96, 99].includes(code))
      return "⛈";

    return "☀";
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">

          <div className="h-16 w-16 mx-auto rounded-full border-4 border-[#F04D44] border-t-transparent animate-spin" />

          <h1 className="mt-8 text-4xl font-black">
            Nimbus
          </h1>

          <p className="mt-3 text-neutral-500">
            Reading the skies...
          </p>

        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">

        <div className="card p-10 text-center">

          <h2 className="text-4xl font-black">
            Oops.
          </h2>

          <p className="mt-4">
            {error}
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen">

      <div className="section py-10">

        <Header />

        {weather && (
          <>
            <section className="mt-20 text-center">

              <p className="uppercase tracking-[0.45em] text-sm text-neutral-500">
                Today's Forecast
              </p>

              <div className="mt-8 text-8xl">
                {getWeatherIcon(weather.current.weather_code)}
              </div>

              <h2 className="mt-6 text-8xl md:text-9xl font-black tracking-tight">
                {Math.round(weather.current.temperature_2m)}°
              </h2>

              <p className="mt-5 text-2xl text-neutral-700">
                {getWeatherDescription(weather.current.weather_code)}
              </p>

              <p className="mt-6 text-lg text-neutral-500">
                Guwahati, Assam
              </p>

              <div className="mt-8 flex justify-center gap-10 text-lg">

                <div>
                  <p className="text-neutral-500">High</p>

                  <p className="font-bold text-2xl">
                    {Math.round(weather.daily.temperature_2m_max[0])}°
                  </p>
                </div>

                <div>
                  <p className="text-neutral-500">Low</p>

                  <p className="font-bold text-2xl">
                    {Math.round(weather.daily.temperature_2m_min[0])}°
                  </p>
                </div>

              </div>

            </section>

            <section className="mt-24">

              <div className="mb-10">

                <p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
                  Seven-Day Chronicle
                </p>

                <h2 className="mt-2 text-4xl font-black">
                  The Days Ahead
                </h2>

              </div>

              <WeatherList weather={weather} />

            </section>
          </>
        )}

      </div>

    </main>
  );
}
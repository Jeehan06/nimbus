import WeatherCard from "./WeatherCard";

type WeatherData = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

type Props = {
  weather: WeatherData;
};

export default function WeatherList({ weather }: Props) {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {weather.daily.time.map((date, index) => (
        <WeatherCard
          key={date}
          date={date}
          maxTemp={weather.daily.temperature_2m_max[index]}
          minTemp={weather.daily.temperature_2m_min[index]}
        />
      ))}
    </section>
  );
}
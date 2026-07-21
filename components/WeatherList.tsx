import WeatherCard from "./WeatherCard";

type WeatherListProps = {
  weather: {
    daily: {
      time: string[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
    };
  };
};

export default function WeatherList({ weather }: WeatherListProps) {
  return (
    <section
      className="
        mt-10
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
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
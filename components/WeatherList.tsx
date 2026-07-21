import WeatherCard from "./WeatherCard";

const weatherData = [
  {
    date: "Monday",
    maxTemp: 31,
    minTemp: 24,
  },
  {
    date: "Tuesday",
    maxTemp: 30,
    minTemp: 23,
  },
  {
    date: "Wednesday",
    maxTemp: 29,
    minTemp: 22,
  },
];

export default function WeatherList() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {weatherData.map((day) => (
        <WeatherCard
          key={day.date}
          date={day.date}
          maxTemp={day.maxTemp}
          minTemp={day.minTemp}
        />
      ))}
    </section>
  );
}
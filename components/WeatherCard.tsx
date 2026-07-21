type WeatherCardProps = {
  date: string;
  maxTemp: number;
  minTemp: number;
};

export default function WeatherCard({
  date,
  maxTemp,
  minTemp,
}: WeatherCardProps) {
  return (
    <div className="rounded-xl bg-slate-800 p-6 shadow-lg">
      <h2 className="text-xl font-semibold">{date}</h2>

      <p className="mt-3 text-3xl">🌤️</p>

      <p className="mt-2">High: {maxTemp}°C</p>

      <p>Low: {minTemp}°C</p>
    </div>
  );
}
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

  let icon = "☁️";

  if (maxTemp >= 32) {
    icon = "☀️";
  } else if (maxTemp >= 26) {
    icon = "🌤️";
  } else if (maxTemp >= 20) {
    icon = "⛅";
  } else {
    icon = "🌧️";
  }

  return (
    <div
      className="
        rounded-[32px]
        bg-white/70
        backdrop-blur-xl
        border border-white/70
        shadow-xl
        hover:shadow-sky-400/40
        hover:scale-105
        hover:-translate-y-2
        transition-all
        duration-300
        p-8
      "
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">
        {new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}
      </h2>

      <div className="text-7xl text-center my-6">
        {icon}
      </div>

      <div className="space-y-3 text-center">

        <p className="text-lg text-gray-700">
          🌡️ High
        </p>

        <p className="text-4xl font-bold text-sky-700">
          {maxTemp}°C
        </p>

        <p className="text-lg text-gray-700 mt-4">
          ❄️ Low
        </p>

        <p className="text-3xl font-semibold text-blue-600">
          {minTemp}°C
        </p>

      </div>
    </div>
  );
}
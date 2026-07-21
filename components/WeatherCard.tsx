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
  let icon = "☁";
  let accent = "text-neutral-600";
  let weather = "Cloudy";

  if (maxTemp >= 32) {
    icon = "☀";
    accent = "text-[#F04D44]";
    weather = "Sunny";
  } else if (maxTemp >= 26) {
    icon = "⛅";
    accent = "text-amber-500";
    weather = "Partly Cloudy";
  } else if (maxTemp >= 20) {
    icon = "☁";
    accent = "text-slate-500";
    weather = "Cloudy";
  } else {
    icon = "☂";
    accent = "text-sky-600";
    weather = "Rain";
  }

  return (
    <article
      className="
        card
        p-8
        rounded-[32px]
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </h3>

        </div>

        <span className={`text-5xl ${accent}`}>
          {icon}
        </span>

      </div>

      <div className="mt-10">

        <p className="text-neutral-500 text-sm uppercase tracking-widest">
          {weather}
        </p>

        <p className="mt-2 text-5xl font-black tracking-tight">
          {Math.round(maxTemp)}°
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">

          <span className="text-neutral-500">
            Low
          </span>

          <span className="font-semibold text-xl">
            {Math.round(minTemp)}°
          </span>

        </div>

      </div>

    </article>
  );
}
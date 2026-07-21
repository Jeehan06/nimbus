export default function Header() {
  return (
    <header className="text-center">
      <h1 className="text-7xl font-black text-sky-700 drop-shadow-md">
        ☁️ Nimbus
      </h1>

      <p className="mt-4 text-2xl text-gray-700 font-medium">
        Your Daily Weather Companion
      </p>

      <p className="mt-2 text-gray-600">
        Live 7-day weather forecast powered by Open-Meteo
      </p>
    </header>
  );
}
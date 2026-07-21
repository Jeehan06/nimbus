export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

      <div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
          Nimbus
        </h1>

        <p className="mt-5 text-lg md:text-xl italic text-neutral-600 max-w-xl">
          “Every wind carries tomorrow&apos;s tale.”
        </p>

      </div>

      <div className="card self-start px-6 py-5">

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Today
        </p>

        <p className="mt-2 text-2xl font-bold">
          {today}
        </p>

      </div>

    </header>
  );
}
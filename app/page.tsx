import Header from "@/components/Header";
import WeatherList from "@/components/WeatherList";




export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        ☁️ Nimbus
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
        Your Daily Weather Companion
      </p>
    </main>
  );
}
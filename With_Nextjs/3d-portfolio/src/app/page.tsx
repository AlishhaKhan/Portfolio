
import HomeOverlay from "../components/HomeOverlay";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <HomeOverlay />
      <AboutPage />
    </main>
  );
}

import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <Navbar />
      <HeroSection />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Events />
      <Footer />
    </div>
  );
}

import { Header } from "./components/Header.jsx";
import About from "./organism/About.jsx";
import Contact from "./organism/Contact.jsx";
import { Footer } from "./organism/Footer.jsx";
import Hero from "./organism/Hero.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-5">
        <Hero />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

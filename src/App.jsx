import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import HIWSection from "./components/HIW.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HIWSection />
      <Footer />
    </>
  );
}

export default App;

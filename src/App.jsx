import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero/Hero";
import Services from "./components/sections/services/Services";
import About from "./components/sections/about/About";
import WhyChooseUs from "./components/sections/whyChooseUs/WhyChooseUs";
import Gallery from "./components/sections/gallery/Gallery";
import Testimonials from "./components/sections/testimonials/Testimonials";
import CTA from "./components/sections/cta/CTA";
import Pricing from "./components/sections/pricing/Pricing";
import Contact from "./components/sections/contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CTA />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import HeroSection from "./components/heroSection"; 
import Navbar from './components/Navbar';
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/workFlow";
import Pricing from "./components/pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App
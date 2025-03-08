import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Seemly from "../components/Seemly";
import UpcomingEvents from "../components/UpcomingEvents";
import Partners from "../components/OurPartners";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Seemly />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <UpcomingEvents />
      <Form />
      <Footer />
    </div>
  );
};

export default Index;

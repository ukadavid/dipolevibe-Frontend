import NavBar from "../../Components/Homepage/NavBar";
import Header from "../../Components/Homepage/Header";
import TestimonialCarousel from "../../Components/Homepage/Carousel";
import Footer from "../../Components/Homepage/Footer";
import PlansComponent from "../../Components/Homepage/Payment";
import Feature from "../../Components/Homepage/Feature";
import CTA from "../../Components/Homepage/CTA";

const HomePage = () => {
  return (
    <div className="mx-0 lg:mx-0">
        <NavBar />
        <Header />
        <CTA />
        <Feature />
        <TestimonialCarousel />
      <PlansComponent />
      <Footer />

    </div>
  );
};

export default HomePage;

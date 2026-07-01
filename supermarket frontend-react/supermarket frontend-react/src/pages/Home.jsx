import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Categories from "../components/Categories";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <Categories />
      <WhyChooseUs />
     
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
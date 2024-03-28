import NavBarUser from "../components/elements/NavBarUser";
import Hero from "../components/section/Hero";
import ReasonDetails from "../components/section/ReasonDetails";
import FeatureDetails from "../components/section/FeatureDetails";
import Footer from "../components/elements/Footer";

const HomePage = () => {

  window.scrollTo(0, 0);
  
  return (
    <>
      <NavBarUser />
      <Hero />
      <ReasonDetails />
      <FeatureDetails />
      <Footer />
    </>
  );
};

export default HomePage;

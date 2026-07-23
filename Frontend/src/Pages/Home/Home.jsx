import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
// import BloodGroups from "../../components/SearchFilters/SearchFilters";
 import Features from "../../components/Features/Features";
// import HowItWorks from "../../components/Table/Table";
 import EmergencyBanner from "../../components/EmergencyBanner/EmergencyBanner";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <BloodGroups /> */}
      <Features />
      <EmergencyBanner />
      <Footer />
    </>
  );
} 

export default Home; 
import HeroSection from "../modules/Home/1-Hero-Section";
import PartnerUp from "../modules/Home/6-Contact-Us";
import Footer from "../modules/Footer";
import Partners from "../modules/Home/2-Highlights";
import Team from "../modules/Home/4-Team";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Team />
      <PartnerUp />
      <Footer />
    </>
  );
}

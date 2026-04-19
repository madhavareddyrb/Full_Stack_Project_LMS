import Navbar from "@/Components/HomePageComponents/Navbar/Navbar";
import TeachWithUsHeroBanner from "./TeachWithUsHeroBanner/TeachWithUsHeroBanner";
import TeachWithUsReasons from "./TeachWithUsReasons/TeachWithUsReasons";
import TotalStrength from "./TotalStrengthofudemy/TotalStrengthofudemy";
import HowToStart from "./HowToStart/HowToStart";
import SupportPage from "./SupportPage/SupportPage";
import GetStartedActionBanner from "./GetStartedActionBanner/GetStartedActionBanner";

export default function TeachWithUsHomePage() {
  return (
    <>
      <Navbar />
      <TeachWithUsHeroBanner />
      <TeachWithUsReasons />
      <TotalStrength />
      <HowToStart />
      <SupportPage />
      < GetStartedActionBanner/>
    </>
  );
}

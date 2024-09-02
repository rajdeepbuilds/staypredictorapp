import Header from "@/components/Header";
import CoverPage from "@/components/CoverPage"; 
import AboutUs from "@/components/AboutUs"; 
import SlideShow from "@/components/SlideShow";
import HotelCancelForm from "@/components/HotelCancelForm"; // Import the HotelCancelForm component

export default function Home() {
  return (
    <div className="bg-[#2d2d2d]">
      <Header/>
      <CoverPage/>
      <AboutUs/>
      <SlideShow/>
      <HotelCancelForm/>
    </div>
  );
}

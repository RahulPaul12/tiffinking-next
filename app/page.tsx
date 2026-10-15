import AboutComponent from "@/components/ui/AboutComponent";
import FaqComponent from "@/components/ui/FaqComponent";
import FeatureComponent from "@/components/ui/FeatureComponent";
import GalleryComponent from "@/components/ui/GalleryComponent";
import HeroComponent from "@/components/ui/HeroComponent";
import SwiperComponent from "@/components/ui/SwiperComponent";

export default function Home() {
  return (
    <>

    {/* <!--====================================
                HERO PART START  
    =====================================--> */}
     <HeroComponent/>
    {/* <!--====================================
                HERO PART END  
    =====================================--> */}   

     {/* <!--====================================
          WHAT WE SERVE PART START  
    =====================================--> */}
    <section className="container mb-16 sm:mb-20">
        <h2 className="text-center font-semibold text-[22px] sm:text-[32px] mb-2 sm:mb-4">What We<span className="text-primary"> Serve </span>You</h2>
        <p className="text-sm sm:text-base font-normal text-center mb-2.5 sm:mb-6">From Our Kitchen to Your Table – Pure Culinary Excellence</p>
        <SwiperComponent/>
    </section>
    {/* <!--====================================
          WHAT WE SERVE PART END  
    =====================================--> */}

    {/* <!--====================================
          ABOUT US PART START  
    =====================================--> */}
    <AboutComponent/>
    {/* <!--====================================
         ABOUT US PART END 
    =====================================--> */}

    {/* <!--====================================
            FEATURES PART START  
    =====================================--> */}
    <FeatureComponent/>
    {/* <!--====================================
             FEATURES PART END  
    =====================================--> */}

    {/* <!--====================================
            IMAGE GALLERY PART START  
    =====================================--> */}
    <GalleryComponent/>
    {/* <!--====================================
            IMAGE GALLERY PART END 
    =====================================--> */}

    {/* <!--====================================
               FAQ PART START  
    =====================================--> */}
    <FaqComponent/>
    {/* <!--====================================
               FAQ PART END  
    =====================================--> */}

    </>
  );
}

import SwiperComponent from "@/components/ui/SwiperComponent";

export default function Home() {
  return (
    <>

    {/* <!--====================================
                HERO PART START  
    =====================================--> */}
    <section className="bg-herobg pt-24 sm:pt-32">
        <div className="container  mb-16 sm:mb-20">
            <div className="row items-center justify-between gap-y-2">
                <div className="col-12 md:col-6">
                    <h1 className="text-2xl sm:text-[44px] font-semibold leading-tight mb-3 sm:mb-6 text-center md:text-start">Exceptional Catering for Everyday – <span className="text-primary">Fresh, Flavorful, & Memorable!</span></h1>
                    <p className="text-base font-normal text-center md:text-start mb-4 sm:mb-8">Say goodbye to meal planning and cooking—our daily catering service ensures you enjoy fresh, delicious meals without the hassle.</p>
                    <a href="./menu-horizontal.html" className=" w-fit bg-primary text-white text-lg font-medium ltr:pl-6 rtl:pr-6 py-1.5 sm:py-2 px-2 mx-auto md:mx-0 rounded-full flex items-center gap-6">Order Now <span className="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center bg-white"><i className="icon-arrow-upright text-xl text-primary"></i></span></a>
                </div>
                <div className="col-12 md:col-6">
                    <div className="flex justify-center lg:justify-end">
                        <div className="max-w-[479px]">
                            <img className="w-full" src="../../images/banner/hero_banner.png" alt="hero banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    <section className="container">
        <div className="mt-12 md:mt-14 mb-12 sm:mb-20">
            <div className="row items-center justify-between sm:flex-row flex-col-reverse">
                <div className="col-12 md:col-6">
                    <div className="flex justify-center lg:justify-start">
                        <div className="max-w-[479px]">
                            <img className="w-full" src="../../images/about.png" alt="about banner"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <h6 className="text-primary text-base sm:text-[22px] font-semibold sm:font-medium md:rtl:text-right md:ltr:text-left text-center mb-1 sm:mb-2">About Us</h6>
                    <h1 className="text-2xl sm:text-[44px] font-semibold leading-8 sm:leading-tight mb-3 sm:mb-6 text-center md:text-start ">Passionately Catering, Perfecting Every Bite</h1>
                    <p className="text-base font-normal text-center md:text-start mb-4 sm:mb-8">At TiffinKing, we bring people together with exceptional food and service. Using fresh ingredients and expert craftsmanship, we create memorable dining experiences for any occasion. Whether it’s daily corporate meals or grand celebrations, we cater with passion and precision.</p>
                    <button className="bg-primary text-white text-lg font-medium ltr:pl-6 rtl:pr-6 py-1.5 sm:py-2 px-2 mx-auto md:mx-0 rounded-full flex items-center gap-6">Read More <span className="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center bg-white"><i className="icon-arrow-upright text-xl text-primary"></i></span></button>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====================================
         ABOUT US PART END 
    =====================================--> */}

    {/* <!--====================================
            FEATURES PART START  
    =====================================--> */}
    <section className="bg-herobg mb-2 sm:mb-20 py-12 sm:py-20">
        <div className="container">
            <h2 className="text-center font-semibold text-[22px] sm:text-[32px] mb-2 sm:mb-4">What We<span className="text-primary"> Serve </span>You</h2>
            <p className="text-sm sm:text-base font-normal text-center mb-2.5 sm:mb-6">From Our Kitchen to Your Table – Pure Culinary Excellence</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col justify-center items-center text-center">
                    <img className="mb-6" src="../../images/features/Landscape.png" alt="features"/>
                    <h3 className="text-lg font-semibold mb-2">Various Region Based</h3>
                    <p>We have various regional-style food categories</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img className="mb-6" src="../../images/features/Office Staff.png" alt="features"/>
                    <h3 className="text-lg font-semibold mb-2">Various Region Based</h3>
                    <p>We have various regional-style food categories</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img className="mb-6" src="../../images/features/Coconut Oil.png" alt="features"/>
                    <h3 className="text-lg font-semibold mb-2">Various Region Based</h3>
                    <p>We have various regional-style food categories</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <img className="mb-6" src="../../images/features/Thumbs Up.png" alt="features"/>
                    <h3 className="text-lg font-semibold mb-2">Various Region Based</h3>
                    <p>We have various regional-style food categories</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====================================
             FEATURES PART END  
    =====================================--> */}

    {/* <!--====================================
            IMAGE GALLERY PART START  
    =====================================--> */}
    <section className="container mb-10 sm:mb-20">
        <h2 className="text-[22px] sm:text-[32px] font-semibold text-center mb-8 sm:mb-12">Image Gallery</h2>
        <div className="image-gallery block sm:grid gap-x-4 md:gap-x-6">
            <div className="item item1 transition-all duration-300">
                <img src="../../images/gallery/Beef with Brocolli.png" alt="gallery"/>
            </div>
            <div className="item item2 transition-all duration-300">
                <img src="../../images/gallery/Beef with Mix Vegetables.png" alt="gallery"/>
            </div>
            <div className="item item3 transition-all duration-300">
                <img src="../../images/gallery/Kung Pao Squid.png" alt="gallery"/>
            </div>
            <div className="item item4 transition-all duration-300">
                <img src="../../images/gallery/Poached Pear Salad.png" alt="gallery"/>
            </div>
            <div className="item item5 transition-all duration-300">
                <img src="../../images/gallery/Roasted Salmon Salad.png" alt="gallery"/>
            </div>
            <div className="item item6 transition-all duration-300">
                <img src="../../images/gallery/Szechuan Beef.png" alt="gallery"/>
            </div>
        </div> 
    </section>
    {/* <!--====================================
            IMAGE GALLERY PART END 
    =====================================--> */}


    {/* <!--====================================
               FAQ PART START  
    =====================================--> */}
    <section className="container mb-16 sm:mb-20">
        <h2 className="text-[22px] sm:text-[32px] font-semibold mb-8 sm:mb-12 text-center">Frequently Asked Questions (FAQ)</h2>
        <div className="flex flex-col gap-4">
            <div className="accordionBtn border border-[#EFF0F6] py-3 sm:py-6 rounded-2xl">
                <div className="px-3 sm:px-6 h-full flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">What types of meals do you offer?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">Are your ingredients fresh and locally sourced?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">Do you provide vegetarian or vegan options?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">Can I customize my meal plan?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">What is the delivery schedule and service area?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">How do I place an order?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
            <div className="accordionBtn border border-[#EFF0F6] rounded-2xl py-3 sm:py-6">
                <div className="px-3 sm:px-6 flex justify-between items-center w-full">
                    <h6 className="text-base sm:text-[22px] font-medium leading-normal">Are your ingredients fresh and locally sourced?</h6>
                    <i className="accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300"></i>
                </div>
                <div style={{height: "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                    <p>At TiffinKing, we offer a diverse range of meals, including home-style comfort food, corporate catering options, and region-based specialties. Our menu features nutritious and delicious dishes crafted with fresh ingredients, ensuring a perfect balance of taste and health. Whether you need daily meals, event catering, or customized meal plans, we’ve got you covered!</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!--====================================
               FAQ PART END  
    =====================================--> */}

    </>
  );
}

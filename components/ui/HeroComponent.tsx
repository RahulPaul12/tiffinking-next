"use client"
import useBanners from "@/lib/api/banner"

const HeroComponent = () => {
    const { banner } = useBanners()
    return (
        <section className="bg-herobg pt-24 sm:pt-32">
            <div className="container  mb-16 sm:mb-20">
                <div className="row items-center justify-between gap-y-2">
                    <div className="col-12 md:col-6">
                        <h1 className="text-2xl sm:text-[44px] font-semibold leading-tight mb-3 sm:mb-6 text-center md:text-start">{banner?.title} <span className="text-primary">{banner[0]?.subtitle}</span></h1>
                        <p className="text-base font-normal text-center md:text-start mb-4 sm:mb-8">{banner?.description}</p>
                        <a href="./menu-horizontal.html" className=" w-fit bg-primary text-white text-lg font-medium ltr:pl-6 rtl:pr-6 py-1.5 sm:py-2 px-2 mx-auto md:mx-0 rounded-full flex items-center gap-6">Order Now <span className="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center bg-white"><i className="icon-arrow-upright text-xl text-primary"></i></span></a>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="flex justify-center lg:justify-end">
                            <div className="max-w-119.75">
                                <img className="w-full" src={banner?.image} alt="hero banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComponent
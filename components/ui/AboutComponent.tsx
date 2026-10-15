'use client'
import useAbout from "@/lib/api/about";

const AboutComponent = () => {
    const { about } = useAbout();
    return (
    <section className="container">
        <div className="mt-12 md:mt-14 mb-12 sm:mb-20">
            <div className="row items-center justify-between sm:flex-row flex-col-reverse">
                <div className="col-12 md:col-6">
                    <div className="flex justify-center lg:justify-start">
                        <div className="max-w-119.75">
                            <img className="w-full" src={about?.image} alt="about banner"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <h6 className="text-primary text-base sm:text-[22px] font-semibold sm:font-medium md:rtl:text-right md:ltr:text-left text-center mb-1 sm:mb-2">About Us</h6>
                    <h1 className="text-2xl sm:text-[44px] font-semibold leading-8 sm:leading-tight mb-3 sm:mb-6 text-center md:text-start ">{about?.title}</h1>
                    <p className="text-base font-normal text-center md:text-start mb-4 sm:mb-8">{about?.description}</p>
                    <button className="bg-primary text-white text-lg font-medium ltr:pl-6 rtl:pr-6 py-1.5 sm:py-2 px-2 mx-auto md:mx-0 rounded-full flex items-center gap-6">Read More <span className="w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center bg-white"><i className="icon-arrow-upright text-xl text-primary"></i></span></button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutComponent
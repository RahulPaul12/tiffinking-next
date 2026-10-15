'use client'

import useAccordion from "@/hooks/useFaq";
import useFaq from "@/lib/api/faq";


const FaqComponent = () => {
    const {faq, isLoading, isError, error, refetch} = useFaq();
    const { toggleFaq, isOpen } = useAccordion()
    return (
    <section className="container mb-16 sm:mb-20">
        <h2 className="text-[22px] sm:text-[32px] font-semibold mb-8 sm:mb-12 text-center">Frequently Asked Questions (FAQ)</h2>
        <div className="flex flex-col gap-4">
            {
                faq?.map((item: any) => (
                    <div key={item.id} className="accordionBtn border border-[#EFF0F6] py-3 sm:py-6 rounded-2xl">
                        <div className="px-3 sm:px-6 h-full flex justify-between items-center w-full" onClick={toggleFaq}>
                            <h6 className="text-base sm:text-[22px] font-medium leading-normal">{item.question}</h6>
                            <i className={`accordion-icon icon-arrow-down text-primary text-base sm:text-2xl transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                        </div>
                        <div style={{height: isOpen ? "auto" : "0px"}} className="overflow-hidden px-3 sm:px-6 transition-all duration-300">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    )
}

export default FaqComponent;
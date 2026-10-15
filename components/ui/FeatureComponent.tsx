"use client"
import useFeature from "@/lib/api/feature";

const FeatureComponent = () => {
    const {feature,isLoading,isError,error}=useFeature();
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error: {error?.message}</div>
    }
    return (
    <section className="bg-herobg mb-2 sm:mb-20 py-12 sm:py-20">
        <div className="container">
            <h2 className="text-center font-semibold text-[22px] sm:text-[32px] mb-2 sm:mb-4">What We<span className="text-primary"> Serve </span>You</h2>
            <p className="text-sm sm:text-base font-normal text-center mb-2.5 sm:mb-6">From Our Kitchen to Your Table – Pure Culinary Excellence</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    feature?.map((item,index)=>{
                        return(
                            <div key={index} className="flex flex-col justify-center items-center text-center">
                                <img className="mb-6" src={item?.image} alt="features"/>
                                <h3 className="text-lg font-semibold mb-2">{item?.title}</h3>
                                <p>{item?.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    )
}

export default FeatureComponent;
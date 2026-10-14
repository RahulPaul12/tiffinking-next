const MobileLayout = () => {
    return (
    <section className="w-full lg:hidden bottom-0 left-0 z-20 fixed drop-shadow-mobile-nav">
        <div className="bg-white grid grid-cols-5 justify-items-center h-[56px]">
            <a href="" className="flex flex-col items-center justify-center text-[#6E7191]">
                <i className="icon-home text-base"></i>
               <h6 className="text-xs font-normal">Home</h6>
            </a>
            <a href="" className="flex flex-col items-center justify-center text-[#6E7191]">
                <i className="icon-document text-base"></i>
                <h6 className="text-xs font-normal">Menu</h6>
            </a>
            <button data-drawer="#cart" className="w-12 h-12 rounded-full bg-primary -mt-5 flex items-center justify-center relative shadow-mobile-cartBtn">
                <i className="icon-cart text-2xl text-white"></i>
                <div className="absolute top-2 right-1.5 w-2 h-2 rounded-full bg-[#FFDB1F]"></div>
            </button>
            <a href="" className="flex flex-col items-center justify-center text-[#6E7191]">
                <i className="icon-order text-base"></i>
                <h6 className="text-xs font-normal">My Orders</h6>
            </a>
            <button data-drawer="#profile" className="flex flex-col items-center justify-center text-[#6E7191]">
                <i className="icon-profile-circle text-base"></i>
                <h6 className="text-xs font-normal">Profile</h6>
            </button>
        </div>
    </section>
    )
}

export default MobileLayout
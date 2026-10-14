const FooterLayout = () => {
    return (
    <section className="pt-8 sm:pt-12 bg-primary lg:mb-0 mb-14">
        <div className="container flex md:flex-row flex-col items-start justify-between gap-6">
            <div>
               <a href="#"><img className="mb-6 w-32 h-auto" src="../../images/tiffinking_logo_white.png" alt="logo"/></a>
               <div className="mb-6">
                    <p className="text-xs font-normal mb-3 text-white">Subscribe to our newsletter to get latest updates</p>
                    <form action="" className="h-12 p-2 rounded-lg bg-white flex">
                        <input type="text" className=" ps-2 outline-none" placeholder="Your email address"/>
                        <button className="p-2 rounded-md bg-primary h-8 flex items-center justify-center text-white">Subscribe</button>
                    </form>
               </div>
               <div className="mb-0 md:mb-8">
                    <p className="text-xs font-normal mb-4 text-white">Follow Us on</p>
                    <div className="flex items-center gap-6">
                        <img src="../../images/social/facebook.png" alt="social"/>
                        <img src="../../images/social/Instagram.png" alt="social"/>
                        <img src="../../images/social/Twitter.png" alt="social"/>
                        <img src="../../images/social/Youtube.png" alt="social"/>
                    </div>
               </div>
            </div>
            <div className="text-white">
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul className="[&_li]:text-base [&_li]:font-normal flex flex-col gap-3">
                    <li><a href="#">Cookie Setting</a></li>
                    <li><a href="#">Terms & conditions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contuct Us</a></li>
                </ul>
            </div>
            <div className="text-white">
                <h2 className="text-lg font-semibold mb-2">Download Our Apps</h2>
                <div className="flex gap-3 items-center mb-6">
                    <img src="../../images/footer/appStore.png" alt="appstore"/>
                    <img src="../../images/footer/playStore.png" alt="playstore"/>
                </div>
                <div className="flex gap-2 mb-3">
                    <i className="icon-email-track text-2xl"></i>
                    <span className="text-lg font-normal">tiffinkinghotline@gmail.com</span>
                </div>
                <div className="flex gap-2">
                    <i className="icon-call-center text-2xl"></i>
                    <span className="text-lg font-normal">0123659874563</span>
                </div>
            </div>
        </div>
        <div className="p-4 lg:p-6 border-t border-primary-light/40">
            <p className="text-sm font-normal leading-6 text-center text-white">&copy; TiffinKing by iNiLabs 2022, All Rights Reserved</p>
        </div>
    </section>
    );
};

export default FooterLayout;
const ProfileSidebarLayout = () => {
    return (
    <aside id="profile" className="drawer">
        <div className="max-w-md w-full p-4 drawer-content">
            <div className="flex justify-end text-negative">
                <i className="icon-line-close-circle text-xl close-sidebar cursor-pointer"></i>
            </div>
            <div className="flex items-center gap-3 mb-5">
                <figure className="overflow-hidden relative z-10 w-[74px] h-[74px] border-2 border-dashed rounded-full inline-flex items-center justify-center border-white bg-gradient-to-t from-[#FFD361] to-[#FF006B] 
            before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-24 before:h-24 before:rounded-full before:-z-10 before:bg-white">
                <img className="w-[68px] h-[68px] rounded-full" src="../../images/avatar/customer.png" alt="avatar"/>
                <label htmlFor="avatar" className="block w-full h-11 absolute top-1/2 bottom-0 z-10 cursor-pointer bg-white/70">
                    <input type="file" id="avatar" className="w-full h-full rounded-full opacity-0 cursor-pointer"/>
                    <svg className="absolute left-1/2 -translate-x-1/2 bottom-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.19 4.31C21.07 4.43 20.91 4.49 20.75 4.49C20.59 4.49 20.43 4.43 20.31 4.31L20.13 4.13V6.37C20.13 6.72 19.85 7 19.5 7C19.15 7 18.87 6.72 18.87 6.37V4.13L18.69 4.31C18.45 4.55 18.05 4.55 17.81 4.31C17.57 4.07 17.57 3.67 17.81 3.43L19.06 2.18C19.11 2.13 19.18 2.09 19.25 2.06C19.27 2.05 19.29 2.05 19.31 2.04C19.36 2.02 19.41 2.01 19.47 2.01C19.49 2.01 19.51 2.01 19.53 2.01C19.6 2.01 19.66 2.02 19.73 2.05C19.74 2.05 19.74 2.05 19.75 2.05C19.82 2.08 19.88 2.12 19.93 2.17C19.94 2.18 19.94 2.18 19.95 2.18L21.2 3.43C21.44 3.67 21.44 4.07 21.19 4.31Z" fill="#1F1F39"/>
                        <path d="M9.00012 10.3801C10.3146 10.3801 11.3801 9.31456 11.3801 8.00012C11.3801 6.68568 10.3146 5.62012 9.00012 5.62012C7.68568 5.62012 6.62012 6.68568 6.62012 8.00012C6.62012 9.31456 7.68568 10.3801 9.00012 10.3801Z" fill="#1F1F39"/>
                        <path d="M20.97 8H20.5V12.61L20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16V3.03C16 2.63 16.07 2.29 16.23 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.77C21.71 7.93 21.37 8 20.97 8Z" fill="#1F1F39"/>
                    </svg> 
                </label>
                </figure>
                <div>
                    <h3 className="font-medium text-sm leading-6 capitalize mb-0.5">Madelyn Lubin</h3>
                    <p className="text-xs mb-0.5 text-black/80">madelynlub@gmail.com</p>
                    <p className="font-medium text-sm leading-6">$15.49</p>
                </div>
            </div>
            <nav>
                <a href="../auth/edit-profile.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-edit text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Edit Profile</span>
                </a>
                <a href="./chat.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-line-messages text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Chat</span>
                </a>
                <a href="../auth/change-password.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-key text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Change Password</span>
                </a>
                <a href="#" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-global-edit text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Change Language</span>
                </a>
                <a href="./term-condition.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-key text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Terms & Conditions</span>
                </a>
                <a href="./privacy-policy.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-sheild text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Privacy Policy</span>
                </a>
                <a href="./contact-us.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-phone text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Contuct Us</span>
                </a>
                <a href="./about-us.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-line-info text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">About Us</span>
                </a>
                <a href="../auth/login.html" className="py-3 last:pb-0 flex items-center gap-3 border-b last:border-none border-[#EFF0F6] cursor-pointer group hover:text-primary transition">
                    <i className="icon-logout text-base text-black/80 group-hover:text-primary"></i>
                    <span className="text-sm font-normal leading-6">Logout</span>
                </a>
            </nav>
        </div>
    </aside>
    )
}
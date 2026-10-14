const CartSidebarLayout = () => {
    return (
        <aside id="cart" className="drawer">
        <div className="max-w-96 w-full drawer-content">
            <div className="h-[calc(100vh-138px)] p-4 thin-scrolling">
                <div className="sidebar-header flex items-center justify-between mb-3.5 w-full">
                    <h2 className="text-[22px] font-medium flex-grow text-center">My Cart</h2>
                    <i className="icon-fill-close-circle text-lg text-negative close-sidebar cursor-pointer"></i>
                </div>
                <ul>
                    <li className="flex items-start gap-3 mb-3 pb-3 border-b last:mb-2 last:pb-0 last:border-b-0 border-gray-2">
                        <img className="w-20 h-20 rounded-lg" src="../../images/product/01.png" alt="product"/>
                        <div className="w-full">
                           <p className="w-fit text-[10px] font-medium leading-5 px-2 rounded-full text-[#008BBA] bg-[#E0F8FF]">Breakfast</p>
                           <a href="#" className="text-sm font-normal leading-6 underline">Creamy Cheese Burger</a>
                           <p className="capitalize text-xs mb-1.5 text-black/80">Size: Medium Meal</p>
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-xs font-semibold">$5.60</h3>
                                <div className="flex items-center indec-group">
                                    <button className="icon-trash text-[8px] w-4 h-4 leading-4 text-center rounded-full border transition text-primary border-primary indec-minus"></button>
                                    <input type="number" value="1" className="appearance-none text-center w-7 text-xs font-semibold text-heading indec-value"/>
                                    <button className="icon-add-circle text-base leading-4 text-center transition text-primary indec-plus"></button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 mb-3 pb-3 border-b last:mb-2 last:pb-0 last:border-b-0 border-gray-2">
                        <img className="w-20 h-20 rounded-lg" src="../../images/product/01.png" alt="product"/>
                        <div className="w-full">
                           <p className="w-fit text-[10px] font-medium leading-5 px-2 rounded-full text-[#008BBA] bg-[#E0F8FF]">Breakfast</p>
                           <a href="#" className="text-sm font-normal leading-6 underline">Creamy Cheese Burger</a>
                           <p className="capitalize text-xs mb-1.5 text-black/80">Size: Medium Meal</p>
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-xs font-semibold">$5.60</h3>
                                <div className="flex items-center indec-group">
                                    <button className="icon-minus-circle text-base leading4 text-center transition text-primary indec-minus"></button>
                                    <input type="number" value="1" className="text-center w-7 text-xs font-semibold text-heading indec-value"/>
                                    <button className="icon-add-circle text-base leading-4 text-center transition text-primary indec-plus"></button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="flex flex-col gap-1">
                    <li className="flex gap-1">
                        <h3 className="capitalize text-xs w-fit whitespace-nowrap">Side Dish:</h3>
                        <p className="text-xs text-black/80">Pasta Aglio Olio (spicy), With Gnocchi, cocktail</p>
                    </li>
                    <li className="flex gap-1">
                        <h3 className="capitalize text-xs w-fit whitespace-nowrap">Extras:</h3>
                        <p className="text-xs text-black/80">Extra Cheese</p>
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between gap-2 rounded-xl p-3 mb-3 border border-gray-1">
                    <h3 className="capitalize text-sm font-medium">Subtotal</h3>
                    <h4 className="text-sm font-medium text-[#1AB759]">$11.20</h4>
                </div>
                <a href="./checkout.html" className="flex justify-center rounded-3xl text-center capitalize text-base font-medium py-3 px-3 w-full text-white bg-primary">Procced to Checkout</a>
            </div>
            {/* <!-- <div class="flex-col items-center hidden">
                <div class="max-w-40 mb-12">
                    <img class="w-full" src="../../images/empty-cart.gif" alt="empty">
                </div>
                <p class="text-sm font-normal text-black/80 text-center">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
            </div> --> */}
        </div>
    </aside> 
    )
}

export default CartSidebarLayout
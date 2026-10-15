'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCategory from "@/lib/api/category";


const defaultCategories = [
    { id: "1", title: "Breakfast", image: "/images/category/breakfast.png" },
    { id: "2", title: "Brunch", image: "/images/category/brunch.png" },
    { id: "3", title: "Lunch", image: "/images/category/lunch.png" },
    { id: "4", title: "Snacks", image: "/images/category/snacks.png" },
    { id: "5", title: "Dinner", image: "/images/category/dinner.png" },
];

const SwiperComponent = () => {
    const { categories: apiCategories, isLoading } = useCategory();
    const categories = apiCategories.length > 0 ? apiCategories : defaultCategories;

    const settings = {
        className: "center category-slider",
        centerMode: true,
        infinite: categories.length > 2,
        centerPadding: "60px",
        slidesToShow: Math.min(3, categories.length),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(3, categories.length),
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(2, categories.length),
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                }
            }
        ]
    };

    if (isLoading && apiCategories.length === 0) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 animate-pulse">
                {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="h-32 bg-gray-100 rounded-2xl"></div>
                ))}
            </div>
        );
    }

    return (
        <Slider {...settings}>
            {categories.map((category) => (
                <div key={category.id ?? category.title} className="px-2.5 sm:px-4 focus:outline-none">
                    <a href={`/menu?category=${encodeURIComponent(category.title)}`} className="w-full flex flex-col items-center text-center gap-y-3 sm:gap-y-6 p-4 sm:p-6 pb-3 sm:pb-4 rounded-2xl transition group hover:bg-primary-light bg-[#F7F7FC]">
                        <img className="h-9 md:h-25 drop-shadow-category object-contain" src={category.image} alt={category.title} onError={(e) => {(e.target as HTMLImageElement).src = "/images/category/lunch.png";}}/>
                        <h3 className="text-sm sm:text-[22px] font-semibold group-hover:text-primary leading-6">
                            {category.title}
                        </h3>
                    </a>
                </div>
            ))}
        </Slider>
    );
};


export default SwiperComponent;
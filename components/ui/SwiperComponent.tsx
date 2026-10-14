'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
    { title: "Breakfast", image: "../../images/category/breakfast.png" },
    { title: "Brunch", image: "../../images/category/brunch.png" },
    { title: "Lunch", image: "../../images/category/lunch.png" },
    { title: "Snacks", image: "../../images/category/snacks.png" },
    { title: "Dinner", image: "../../images/category/dinner.png" },
];

const SwiperComponent = () => {
    const settings = {
        className: "center category-slider",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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

    return (
        <Slider {...settings}>
            {categories.map((category) => (
                <div key={category.title} className="px-2.5 sm:px-4 focus:outline-none">
                    <a
                        href="./menu-horizontal.html"
                        className="w-full !flex flex-col items-center text-center gap-y-3 sm:gap-y-6 p-4 sm:p-6 pb-3 sm:pb-4 rounded-2xl transition group hover:bg-primary-light bg-[#F7F7FC] block"
                    >
                        <img
                            className="h-9 md:h-[100px] drop-shadow-category object-contain"
                            src={category.image}
                            alt={category.title}
                        />
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
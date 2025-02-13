import React from "react";
import Slider from "react-slick";//npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";//npm i react-icons
const PrevArrow = ({ onClick }) => (
    <button 
        className="absolute left-[30px] top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 shadow-md hover:bg-gray-700"
        onClick={onClick}
    >
        <FaChevronLeft size={17} />
    </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <button 
        className="absolute right-[30px] top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2  shadow-md hover:bg-gray-700"
        onClick={onClick}
    >
        <FaChevronRight size={17} />
    </button>
);
const PostSlider = () => {
    const posts = [
        {
            title: "SASSA Reapplication for SRD R350 Grant",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/08/SASSA-Reapplication-for-SRD-R350-Grant.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "28 November 2024",
        },
        {
            title: "Sassa Status Check Failed due to Identity Verification Failed",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/08/Sassa-Status-Check-Failed-due-to-Identity-Verification-Failed.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "28 November 2024",
        },
        {
            title: "Sassa Status Check Failed due to Identity Verification Failed",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/08/Sassa-Status-Check-Failed-due-to-Identity-Verification-Failed.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "28 November 2024",
        },
        {
            title: "How to Apply for SASSA Grants Online",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/08/Sassa-Application-For-SRD-R350-Grant.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "27 November 2024",
        },
        {
            title: "How to Apply for SASSA Grants Online",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/08/Sassa-Application-For-SRD-R350-Grant.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "27 November 2024",
        },
        {
            title: "SASSA Payment Dates for December",
            image: "https://srdsassacheck.org.za/wp-content/uploads/2023/09/SASSA-Grant-In-Aid-2.jpg", // Replace with actual image
            author: "Sassa Editorial Team",
            date: "26 November 2024",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        prevArrow: <PrevArrow />,  // Custom previous arrow
        nextArrow: <NextArrow />, 
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500, // Mobile view
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-2xl mx-auto py-8 mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 pl-3">Similar Posts</h2>
            <Slider {...settings}>
                {posts.map((post, index) => (
                    <div key={index} className="p-2">
                        <div className="bg-white shadow-md h-[350px] rounded-lg overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-md font-semibold pb-3">{post.title}</h3>
                                <p className="text-sm text-gray-600">
                                    By {post.author} • {post.date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PostSlider;

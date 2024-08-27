import React from 'react';
import Slider from 'react-slick';

import '../../pages/balloon-decoration/ReusableSlider.css';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"

const ReusableSlider = ({ data, category, handleViewMore }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,  // Enable autoplay
        autoplaySpeed: 3000,  // Adjust the speed for auto-slide (in milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };
    

    return (
        <div className="slider-container">
            <button 
                className="view-more-button1" 
                onClick={() => handleViewMore(category)}
            >
                View More
            </button>
            <Slider {...sliderSettings}>
                {data.map((item, index) => (
                    <div key={index} className="slider-item">
                        <Image 
                            src={item.Image} 
                            alt={item.title} 
                            className="slider-image"
                            width={270}
                            height={250}
                        />
                        <h3>{item.title}</h3>
                        <div className="slider-item-details">
    <p style={{ color: "#9252AA", fontWeight: 'bold', fontSize: '17px' }}>{item.price}</p>
    <p style={{ fontSize: '17px', color: 'rgb(146, 82, 170)' }}>  {/* Adjust the font size as needed */}
        {item.rating}
        <FontAwesomeIcon 
            style={{ 
                marginBottom: '2px',
                marginLeft: '8px',  /* Adjust the margin as needed */
                height: "14px", 
                color: "#ffc107" 
            }} 
            icon={faStar} 
        />
    </p>
</div>


                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReusableSlider;

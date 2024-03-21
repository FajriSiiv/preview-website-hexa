import React from "react";
import Slider from "react-slick";

const SliderOurClient = ({ listClient }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {listClient?.map((list, index) => (
          <div
            className="h-20 bg-white border-2 border-border-primary-background mx-3"
            key={index}
          >
            <div className="flex justify-center items-center h-full px-3 ">
              <img src={list} alt="Our Client" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOurClient;

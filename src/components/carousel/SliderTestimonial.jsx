import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { GiRoundStar } from "react-icons/gi";

const dataTestimonial = [
  {
    say: `Pelayanan sangat memuaskan, proses cepat dan dapat dipantau langsung di website imigrasi`,
    person: "Abdul Latip",
    company: "PT. Mitsui Kinzoku Catalysts Jakarta",
    position: "HRGA Manager",
  },
  {
    say: `Perusahaan yang sangat compliance, bekerja dengan cepat dan baik, pengelolaan SDM (pemagangan dan outsourching) sangat bagus, pengurusan izin izin juga sangat cepat. Overall semua pelayanan yang di berikan sangat membantu keberlangsungan perusahaan kami`,
    person: "Neo Hwee Leong",
    company: "PT. Gemilang Maju Kencana",
    position: "Director",
  },
  {
    say: `Kami sangat terbantu dengan ketepatan dan kecepatan service yang diberikan oleh KHI`,
    person: "Nanda Puspita",
    company: "PT. Plastic Omnium Indonesia",
    position: "HRGA Staff",
  },
];

const SliderTestimonial = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  let maxSlides = 3;

  if (window.innerWidth <= 900) {
    maxSlides = 2;
  }
  if (window.innerWidth <= 650) {
    maxSlides = 1;
  }

  let slideToScrollMax = Math.round(dataTestimonial.length / maxSlides);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (
      currentSlide <
      sliderRef.current.innerSlider.state.slideCount - maxSlides
    ) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      sliderRef.current.slickPrev();
    }
  };

  const CardComp = ({ say, personImg, person, positionPt, company }) => {
    return (
      <div className="min-h-[216px] py-8 px-6 border-border-primary-background flex justify-between flex-col  border-[1.5px] rounded-lg mx-[10px] max-md:py-4">
        <p className="text-sm italic text-[#276AAE] font-medium" title={say}>
          "{say.substring(0, 100)}..."
        </p>
        <div className="flex gap-2 items-center gap-y-3">
          <div className="w-12 h-12">
            <div className="w-full h-full bg-slate-200 rounded-xl flex justify-center items-center font-semibold text-text-primary-900 font-montserrat">
              <span>
                {person
                  .split(" ")
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[2px]">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <GiRoundStar className="text-[#FFAF00] w-3 h-3" key={index} />
              ))}
            </div>
            <span className="text-text-primary-900 font-semibold">
              {person}
            </span>
            <span className="italic text-xs text-text-secondary-700 opacity-70 font-semibold">
              {positionPt}
            </span>
            <span className="text-xs text-text-secondary-700 opacity-70 font-light">
              {company}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {dataTestimonial.map((testi, index) => (
          <CardComp
            key={index}
            say={testi.say}
            personImg={testi.imgSrc}
            person={testi.person}
            positionPt={testi.position}
            company={testi.company}
          />
        ))}
      </Slider>
      <div className="my-10 w-full flex items-center text-base font-medium border-t-2 py-4 h-full border-border-primary-background justify-between">
        <span className="text-sm text-text-secondary-700 max-hp:max-w-[250px] max-hp:w-1/2">
          Kita mempunyai <span className="text-btn-primary-color">100+</span>{" "}
          klien yang senang
        </span>
        <div className="flex gap-4">
          <div className="bg-bg-brand rounded-full py-2 px-6 text-xs">
            {Math.round((currentSlide + maxSlides) / maxSlides)}/
            {slideToScrollMax}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className={`w-8 h-8  rounded-full flex items-center justify-center border-[1px]  ${
                currentSlide === 0
                  ? "bg-background-secondary-colors text-text-primary-900 cursor-not-allowed  border-gray-disable"
                  : "bg-btn-primary-color text-white border-btn-primary-border"
              }`}
              disabled={currentSlide === 0}
            >
              <IoIosArrowBack className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className={` w-8 h-8  rounded-full flex items-center justify-center border-[1px]   ${
                currentSlide ===
                sliderRef.current?.innerSlider?.state?.slideCount - maxSlides
                  ? "bg-background-secondary-colors cursor-not-allowed  text-text-primary-900 border-gray-disable"
                  : "bg-btn-primary-color text-white border-btn-primary-border"
              }`}
              disabled={
                currentSlide ===
                sliderRef.current?.innerSlider?.state?.slideCount - maxSlides
              }
            >
              <IoIosArrowBack className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTestimonial;

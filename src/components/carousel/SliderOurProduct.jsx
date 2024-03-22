import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ButtonPrimary from "../btn/btnPrimary";
import { IoMdArrowRoundForward } from "react-icons/io";

import pengurusanIzin from "../../img/main-photo-webp/pengurusan-izin.webp";
import rekrutmenSeleksi from "../../img/main-photo-webp/rekrutmen-seleksi-hexa.webp";
import bisnisManajemen from "../../img/main-photo-webp/bisnis-manajemen.webp";
import bisnisSupport from "../../img/main-photo-webp/bisnis-support.webp";

const dataOurClient = [
  {
    title: "Pengurusan Izin",
    description:
      "Menyediakan layanan profesional untuk membantu individu atau perusahaan dalam memproses dan mendapatkan izin, lisensi, atau persetujuan yang diperlukan dari berbagai instansi pemerintah atau badan regulasi.",
    tags: ["Izin Operasional", "Izin Tenaga Kerja Asing"],
    imgSrc: pengurusanIzin,
    goTo: "/layanan-kami/pengurusan-izin",
  },
  {
    title: "Rekrutmen & Seleksi",
    description:
      "Kami memberikan jasa layanan perekrutan SDM sesuai dengan kualifikasi yang diinginkan oleh klien, mulai dari level operator sampai dengan level manajerial. Kami membantu organisasi dalam mencari, merekrut, dan memilih karyawan yang berkualitas. Kami memberikan layanan mulai dari penilaian kebutuhan tenaga kerja, perencanaan rekrutmen, pemasaran lowongan kerja, seleksi kandidat, hingga pelaksanaan tes dan wawancara.",
    tags: ["Level Operator", "Level Staff hingga Manajerial"],
    imgSrc: rekrutmenSeleksi,
    goTo: "/layanan-kami/rekrutmen-seleksi",
  },
  {
    title: "Business Process Management",
    description:
      "Kami dapat membantu mengembangkan bisnis Anda dengan berkomitmen untuk menyediakan solusi proses bisnis yang transformatif, sehingga perusahaan Anda dapat fokus pada bisnis intinya. Kami memberikan jasa layanan pengelolaan SDM secara profesional. Serahkan sebagian",
    tags: ["Outsourcing", "Internship"],
    imgSrc: bisnisManajemen,
    goTo: "/layanan-kami/proses-bisnis-manajemen",
  },
  {
    title: "Business Process Support",
    description:
      "Kami memberikan jasa layanan pekerja borongan untuk membantu proses bisris Arda, Lavanan kami menghilangkan proses perekrutan internal dan biaya kantor yang cukup besar, menawarkan sumber daya profesional yang memenuhi syarat untuk secara efektif mengangani kebutuhan administratif Anda",
    tags: ["Packing", "Payroll Services"],
    imgSrc: bisnisSupport,
    goTo: "/layanan-kami/proses-bisnis-support",
  },
];

const SliderOurProduct = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
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

  let maxSlides = 3;

  if (window.innerWidth <= 1024) {
    maxSlides = 2;
  }

  if (window.innerWidth <= 650) {
    maxSlides = 1;
  }

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

  const CardComp = ({ title, description, tags, imgSrc, goTo }) => {
    return (
      <div className="flex flex-col max-w-[380px] rounded-2xl overflow-hidden border-[2px] border-border-terciary mx-3 max-lg:max-w-full ">
        <img
          className="flex-1 w-[390px] max-h-[210px] object-cover object-top max-lg:w-full max-md:max-h-[200px]"
          src={imgSrc}
          alt="our product"
          loading="lazy"
        />

        <div className="flex-1 h-full py-5 px-6 max-md:p-3">
          <h3 className="font-semibold text-lg text-text-primary-900 max-md:text-base  ">
            {title}
          </h3>
          <p className="text-sm text-text-secondary-700 mt-3">
            {description.substring(0, window.innerWidth <= 768 ? 50 : 70)}...
          </p>

          <div className="h-[1.5px] bg-bg-border-blue w-full my-3"></div>
          <div className="flex gap-2 my-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="py-2 px-3 bg-bg-border-blue font-medium text-text-secondary-700 rounded-[4px]  text-[11px] flex-grow text-center max-md:whitespace-pre"
              >
                {tag}
              </div>
            ))}
          </div>
          <ButtonPrimary
            text="View Details"
            wFull={true}
            onClickBtn={() => {
              window.location.href = goTo;
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {dataOurClient.map((data, index) => (
          <CardComp
            key={index}
            title={data.title}
            tags={data.tags}
            description={data.description}
            imgSrc={data.imgSrc}
            goTo={data.goTo}
          />
        ))}
      </Slider>
      <div className="my-8 float-right flex items-center gap-4 max-h-[20px] text-base font-medium">
        <button
          onClick={prevSlide}
          className={`flex items-center gap-1 ${
            currentSlide === 0 ? "text-gray-disable cursor-not-allowed" : ""
          }`}
          disabled={currentSlide === 0}
        >
          <IoMdArrowRoundForward className="w-4 h-4 rotate-180" />
          Previous
        </button>
        <div className="w-[2px] h-5 bg-gray-disable"></div>
        <button
          onClick={nextSlide}
          className={`flex items-center gap-1 ${
            currentSlide ===
            sliderRef.current?.innerSlider?.state?.slideCount - maxSlides
              ? "text-gray-disable cursor-not-allowed"
              : ""
          }`}
          disabled={
            currentSlide ===
            sliderRef.current?.innerSlider?.state?.slideCount - maxSlides
          }
        >
          Next
          <IoMdArrowRoundForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SliderOurProduct;

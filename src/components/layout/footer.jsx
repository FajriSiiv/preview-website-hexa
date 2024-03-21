import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import AbstractFooter from "../../img/abstract-footer.svg";
import IcPhone from "../../img/icon/phone-call-01.svg";
import IcMail from "../../img/icon/mail-01.svg";
import IcGlobe from "../../img/icon/globe-02.svg";
import { FaInstagram } from "react-icons/fa";
import LogoHexaIndonesia from "../Logo";

import { useLocation } from "react-router-dom";

const Footer = () => {
  const router = useLocation();

  const listNav = [
    {
      goTo: "/",
      name: "Home",
    },
    {
      goTo: "/tentang-kami",
      name: "Tentang Kami",
    },
    {
      goTo: "/layanan-kami/pengurusan-izin",
      name: "Layanan Kami",
    },
    {
      goTo: "/kontak-kami",
      name: "Kontak Kami",
    },
  ];

  return (
    <div className="max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5">
      <div className="py-[62px] mb-20 bg-bg-footer-blue max-h-[368px] h-full flex items-center flex-col gap-10 rounded-2xl relative overflow-hidden max-hp:max-h-fit">
        <div className="flex flex-col gap-[10px] px-10 text-center justify-center items-center text-white z-10 max-hp:px-4">
          <h3 className="font-semibold text-[32px] -tracking-[1px] max-w-[824px] leading-[120%] max-md:text-2xl">
            Kami siap membantu Anda mencapai kesuksesan dalam pengelolaan SDM.
          </h3>
          <p className="max-w-[824px]  max-md:text-sm ">
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
            tentang layanan kami atau untuk konsultasi GRATIS! mengenai
            kebutuhan perusahaan Anda.{" "}
          </p>
        </div>
        <div className="absolute -left-[300px] -bottom-[240px]">
          <img
            src={AbstractFooter}
            width={700}
            height={700}
            alt="abstract footer"
          />
        </div>
        <div className="absolute -right-[300px] -bottom-[270px] rotate-90 ">
          <img
            src={AbstractFooter}
            width={700}
            height={700}
            alt="abstract footer"
          />
        </div>
        <button
          className={`items-center justify-center px-6 py-4 flex gap-2 
            text-bg-footer-blue bg-white
            rounded-full w-fit font-medium max-md:py-3 z-10`}
        >
          Hubungi Kami
          <IoIosArrowBack className="rotate-180 w-4 h-4" />
        </button>
      </div>
      <div className="flex justify-between items-center py-6 max-lg:items-end max-hp:flex-col max-hp:items-start max-hp:gap-y-4">
        <div>
          <LogoHexaIndonesia />
        </div>
        <div className="flex gap-6  max-lg:flex-col-reverse max-lg:items-end max-hp:items-start max-hp:gap-y-3">
          <ul className="flex gap-2 items-center text-xs max-hp:flex-wrap">
            {listNav.map((eList, index) => (
              <li key={index} className="block">
                <a
                  href={eList.goTo}
                  className={`
                  font-medium text-text-secondary-700
                  ${
                    eList.goTo === router.pathname ||
                    (router.pathname.includes("/layanan-kami") &&
                      eList.goTo.startsWith("/layanan-kami"))
                      ? "bg-background-secondary-colors font-semibold text-[#182230]"
                      : "bg-none"
                  } rounded-lg px-4 py-2 block hover:bg-background-secondary-colors transition-all`}
                >
                  {eList.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[6px] ">
            <li className="p-2 border-2 border-border-primary-background rounded-lg">
              <a href="#" className="w-full h-full">
                <img src={IcPhone} width={20} height={20} />
              </a>
            </li>
            <li className="p-2 border-2 border-border-primary-background rounded-lg">
              <a href="#" className="w-full h-full">
                <img src={IcMail} width={20} height={20} />
              </a>
            </li>
            <li className="p-2 border-2 border-border-primary-background rounded-lg">
              <a
                href="https://www.kreasihexa.com/"
                target="_blank"
                className="w-full h-full"
              >
                <img src={IcGlobe} width={20} height={20} />
              </a>
            </li>
            <li className="p-2 border-2 border-border-primary-background rounded-lg">
              <a
                href="https://www.instagram.com/kerjasinicom?igsh=dTg4Mml4b3FtZHA3"
                target="_blank"
                className="w-full h-full"
              >
                <FaInstagram className="w-5 h-5 text-[#194DFF]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

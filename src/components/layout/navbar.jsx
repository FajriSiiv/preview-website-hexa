import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logoHexa from "../../img/logo/logo-hexa-kreasi.svg";
import LogoHexaIndonesia from "../Logo";

import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
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

  const openNavMenu = () => {
    if (navMenu) {
      setNavMenu(false);
    } else {
      setNavMenu(true);
    }
  };

  return (
    <div className="w-full h-[84px] flex justify-between items-center max-w-[1144px] mx-auto border-b-2 border-b-[#F2F4F7] max-xl:px-10 relative z-10 max-hp:px-5">
      <div className="lg:hidden absolute bg-white h-[84px] max-h-[84px] bottom-0 left-0 w-screen -z-10"></div>
      <div>
        <LogoHexaIndonesia />
      </div>
      <ul className="flex items-center justify-center gap-x-[16px] font-medium text-sm max-md:hidden">
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
              } rounded-lg px-4 py-3 block hover:bg-background-secondary-colors transition-all 
              
              `}
            >
              {eList.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden max-md:flex" onClick={() => openNavMenu()}>
        <RiMenu4Fill className="w-6 h-6" />
      </div>

      <div
        className={`lg:hidden absolute bg-white h-[80vh] max-h-[400px] botom-0 left-0 w-screen -z-20 transition-all ${
          navMenu ? "translate-y-1/2" : "-translate-y-1/2"
        }`}
      >
        <ul className="flex items-center justify-center gap-x-[16px] font-medium text-sm max-md:flex-col max-lg:h-full max-md:gap-y-4 ">
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
              } rounded-lg px-4 py-3 block hover:bg-background-secondary-colors transition-all 
              
              `}
              >
                {eList.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

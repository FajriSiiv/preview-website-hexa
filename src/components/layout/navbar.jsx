import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LogoHexaIndonesia from "../Logo";

import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [openLayanan, setOpenLayanan] = useState(false);

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

  const listIzinPage = [
    {
      name: "Pengurusan Izin",
      goTo: "/layanan-kami/pengurusan-izin",
    },
    {
      name: "Rekrutmen & Seleksi",
      goTo: "/layanan-kami/rekrutmen-seleksi",
    },
    {
      name: "Business Process Management",
      goTo: "/layanan-kami/proses-bisnis-manajemen",
    },
    {
      name: "Business Process Support",
      goTo: "/layanan-kami/proses-bisnis-support",
    },
  ];

  const openNavMenu = () => {
    if (navMenu) {
      setNavMenu(false);
    } else {
      setNavMenu(true);
    }
  };

  const onClickMenuLayanan = () => {
    if (openLayanan) {
      setOpenLayanan(false);
    } else {
      setOpenLayanan(true);
    }
  };

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenLayanan(false);
      }
    };

    if (window.innerWidth <= 600) {
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      if (window.innerWidth <= 600) {
        document.removeEventListener("touchstart", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [ref]);

  const NavbarDropdownSM = ({ name, goTo }) => {
    return (
      <button
        className="px-4 py-3 hover:bg-background-secondary-colors transition-all rounded-lg text-text-secondary-700"
        onClick={() => (window.location.href = `${goTo}`)}
      >
        {name}
      </button>
    );
  };

  return (
    <div className="w-full h-[84px] flex justify-between items-center max-w-[1144px] mx-auto border-b-2 border-b-[#F2F4F7] max-xl:px-10 relative z-10 max-hp:px-5">
      <div className="lg:hidden absolute bg-white h-[84px] max-h-[84px] bottom-0 left-0 w-screen -z-10"></div>
      <div>
        <LogoHexaIndonesia />
      </div>
      <ul className="flex items-center justify-center gap-x-[16px] font-medium text-sm max-md:hidden relative">
        {listNav.map((eList, index) => (
          <li key={index} className="block">
            <button
              onClick={
                eList.name === "Layanan Kami"
                  ? onClickMenuLayanan
                  : () => (window.location.href = `${eList.goTo}`)
              }
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
            </button>
          </li>
        ))}
        <div
          className={`h-fit w-fit px-14 py-3 bg-white border-2 border-b-gray-disable -right-1/3 top-[115%]   -translate-x-1/2 absolute rounded-xl ${
            openLayanan ? "block" : "hidden"
          }`}
          ref={ref}
        >
          <ul className="flex items-center flex-col gap-y-4">
            {listIzinPage.map((list, index) => (
              <li key={index}>
                <button
                  className="font-medium text-text-secondary-700 rounded-lg px-4 py-3 block hover:bg-background-secondary-colors transition-all"
                  onClick={() => (window.location.href = `${list.goTo}`)}
                >
                  {list.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ul>
      <div className="hidden max-md:flex" onClick={() => openNavMenu()}>
        <RiMenu4Fill className="w-6 h-6" />
      </div>

      <div
        className={`lg:hidden absolute bg-white h-[80vh] max-h-[600px] botom-0 left-0 w-screen -z-20 transition-all ${
          navMenu ? "translate-y-1/2" : "-translate-y-1/2"
        }`}
      >
        <ul className="flex items-center justify-center gap-x-[16px] font-medium text-sm max-md:flex-col max-lg:h-full max-md:gap-y-4 pb-10">
          {listNav.map((eList, index) => (
            <li key={index} className={`flex flex-col max-md:gap-y-4 `}>
              <button
                onClick={
                  eList.name === "Layanan Kami"
                    ? onClickMenuLayanan
                    : () => (window.location.href = `${eList.goTo}`)
                }
                className={`
              font-medium text-text-secondary-700
              ${
                eList.goTo === router.pathname ||
                (router.pathname.includes("/layanan-kami") &&
                  eList.goTo.startsWith("/layanan-kami"))
                  ? "bg-background-secondary-colors font-semibold text-[#182230]"
                  : "bg-none"
              } rounded-lg px-4 py-3 block hover:bg-background-secondary-colors transition-all 
              ${eList.name === "Layanan Kami" ? "mx-auto" : ""}
              `}
              >
                {eList.name}
              </button>
              {eList.name === "Layanan Kami" && (
                <div
                  className={`flex flex-col md:gap-y-4 transition-all overflow-hidden `}
                >
                  {listIzinPage.map((listNav) => (
                    <NavbarDropdownSM name={listNav.name} goTo={listNav.goTo} />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

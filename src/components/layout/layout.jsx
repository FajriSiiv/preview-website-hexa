import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      {children}
      <Footer />
      <div className="relative">
        <div className="bg-text-primary-900 top-0 bottom-0 left-0 right-0 absolute -z-10"></div>
        <div className=" text-white flex items-center justify-between py-6 max-w-[1144px] mx-auto text-sm max-lg:flex-col max-lg:gap-y-3">
          <span>@2024 PT Kreasi Hexa Indonesia. All Right Reserved</span>
          <ul className="flex gap-5 max-hp:flex-wrap max-hp:justify-center">
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Acceptable Use Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Term of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;

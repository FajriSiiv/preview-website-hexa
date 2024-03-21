import React from "react";
import logo from "../../img/logo/logo-hexa.svg";

const LogoHexaIndonesia = () => {
  return (
    <div className="flex gap-1">
      <img
        src={logo}
        alt="PT Kreasi Hexa Indonesia"
        height={42}
        width={35}
        className="object-contain"
      />
      <div className="flex flex-col items-start justify-center uppercase text-[#2C599D] font-montserrat">
        <span className="font-bold  text-sm leading-[120%]">kreasi hexa</span>
        <span className="text-[9px] font-normal tracking-[-0.3px]">
          indonesia
        </span>
      </div>
    </div>
  );
};

export default LogoHexaIndonesia;

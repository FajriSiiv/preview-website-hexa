import React from "react";
import arrowWhite from "../../img/icon-arrow-white.svg";

const ButtonPrimary = ({
  text,
  wFull = false,
  bgWhite = false,
  onClickBtn,
}) => {
  return (
    <button
      onClick={onClickBtn}
      className={`h-fit items-center justify-center px-6 py-4 flex gap-2 ${
        bgWhite ? "text-bg-footer-blue bg-white" : "bg-btn-primary-bg"
      } text-white rounded-2xl ${
        wFull ? "w-full" : "w-fit"
      } max-lg:text-sm max-lg:py-2 max-lg:px-4 max-lg:rounded-lg max-md:text-base max-md:py-3 max-md:px-5`}
    >
      {text} <img src={arrowWhite} className="w-3 h-3" />
    </button>
  );
};

export default ButtonPrimary;

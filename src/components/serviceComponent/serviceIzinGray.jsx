import React from "react";
import IcCheck from "../../img/icon/check-circle.svg";
import ButtonPrimary from "../btn/btnPrimary";

const ServiceIzinGray = ({
  altImage = "Image Izin",
  imgSrc,
  titleIzin,
  listIzin,
  onClickFun,
  widthText = false,
  wImgSmall = false,
}) => {
  const gridLength =
    listIzin?.length >= 7 ? Math.round(listIzin?.length) / 2 : listIzin?.length;

  return (
    <div className="py-32 flex gap-x-20 max-w-[1144px] mx-auto relative  max-lg:flex-col max-lg:gap-y-5 max-hp:px-5 max-xl:p-10">
      <div className="bg-background-secondary-colors absolute top-0 left-1/2 right-0 bottom-0  -z-10 w-screen max-w-[1440px] -translate-x-1/2"></div>
      <div
        className={`${
          wImgSmall ? "max-w-[436px]" : "w-[510px]"
        } rounded-3xl overflow-hidden max-lg:w-full`}
      >
        <img
          src={imgSrc}
          alt={altImage}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="  flex flex-col gap-y-6">
        <h2
          className={`font-medium text-[40px] max-hp:text-2xl ${
            widthText ? "max-w-[600px] whitespace-pre" : "w-full"
          }`}
        >
          {titleIzin}
        </h2>
        <div className="flex flex-col gap-y-3 max-w-[500px]">
          <div
            className={`grid grid-rows-${Math.round(gridLength)} ${
              gridLength >= 7 ? "grid-flow-col" : ""
            } gap-y-3 gap-x-10 flex flex-col`}
          >
            {listIzin?.map((check, index) => (
              <div className="flex gap-x-2 items-center " key={index}>
                <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
                <p className="text-gray-500 text-[20px] max-hp:text-sm max-md:text-base">
                  {check}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <ButtonPrimary
              text="Hubungi Kami"
              wFull={false}
              onClickBtn={() => (window.location.href = "/kontak-kami")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIzinGray;

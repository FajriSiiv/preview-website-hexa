import React from "react";
import IcCheck from "../../img/icon/check-circle.svg";
import ButtonPrimary from "../btn/btnPrimary";

const ServiceIzinWhite = ({
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
    <div className="py-32 flex justify-between gap-x-20 max-w-[1144px] mx-auto max-lg:flex-col-reverse max-lg:gap-y-5 max-hp:px-5 max-xl:p-10">
      <div className="flex flex-col gap-y-6">
        <h2
          className={`font-medium text-[40px] leading-[120%] max-hp:text-2xl -tracking-[-1px] max-md:text-3xl ${
            widthText
              ? "max-w-[600px] whitespace-pre max-md:whitespace-normal"
              : "w-full"
          }`}
        >
          {titleIzin}
        </h2>
        <div className="flex flex-col gap-y-3">
          <div
            className={`grid  ${
              gridLength >= 7 ? "grid-flow-col" : ""
            } gap-y-3 gap-x-10 max-md:flex-col max-md:flex`}
            style={{
              gridTemplateRows: `repeat(${Math.round(
                gridLength
              )}, minmax(0, 1fr))`,
            }}
          >
            {listIzin?.map((check, index) => (
              <div className="flex gap-x-2 items-center" key={index}>
                <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
                <p className="text-gray-500 text-[20px] whitespace-pre max-hp:text-sm max-md:text-base">
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
      <div
        className={`${
          wImgSmall
            ? "max-w-[436px] max-lg:max-w-[1000px]"
            : "w-[510px] max-lg:w-full"
        } rounded-3xl overflow-hidden `}
      >
        <img
          src={imgSrc}
          alt={altImage}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceIzinWhite;

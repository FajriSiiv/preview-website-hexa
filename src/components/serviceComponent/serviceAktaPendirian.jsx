import React from "react";
import IcCheck from "../../img/icon/check-circle.svg";
import ButtonPrimary from "../btn/btnPrimary";
import aktaPendirian from "../../img/main-photo-webp/akta-pendirian-hexa.webp";

const ServiceAktaPendirian = () => {
  const listIzinAktaPendirian = [
    "Akta Notaris",
    "PT Perorangan",
    "CV",
    "PT PMDN & PMA",
    "Pendirian Cabang",
    "Pembuatan Kontrak",
    "Penutupan CV/PT",
    "Pendirian Firma/ Yayasan/ Perkumpulan/ Koperasi",
    "Waarmerking/Legalisir",
    "Dll",
  ];

  return (
    <div className="py-32 flex gap-x-20 max-w-[1144px] mx-auto relative max-xl:p-10  max-lg:flex-col max-lg:gap-y-5 max-hp:px-5">
      <div className="w-[510px] rounded-3xl overflow-hidden max-lg:w-full">
        <img
          src={aktaPendirian}
          alt="akta pendirian hexa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="  flex flex-col gap-y-6 max-w-[613px] max-lg:max-w-[1000px] ">
        <h2 className="font-medium text-[40px] leading-[120%] -tracking-[1px] max-hp:text-2xl max-md:text-3xl">
          Akta Pendirian & Perubahan PT/CV
        </h2>
        <div className="flex flex-col gap-y-3 ">
          <div className="w-full grid grid-rows-6 grid-cols-2 grid-flow-col gap-y-3 max-md:flex-col max-md:flex">
            {listIzinAktaPendirian.map((list, index) => (
              <div
                key={index}
                className={`flex gap-x-2 items-center ${
                  "Pendirian Firma/ Yayasan/ Perkumpulan/ Koperasi".includes(
                    list
                  )
                    ? "h-[30px] max-md:h-fit"
                    : ""
                }`}
              >
                <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
                <p
                  className={`text-gray-500 text-[20px] max-hp:text-sm max-md:text-base ${
                    "Pendirian Firma/ Yayasan/ Perkumpulan/ Koperasi".includes(
                      list
                    )
                      ? ""
                      : ""
                  }`}
                >
                  {list}
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

export default ServiceAktaPendirian;

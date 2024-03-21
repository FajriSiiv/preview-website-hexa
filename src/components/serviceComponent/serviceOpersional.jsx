import React from "react";
import IcCheck from "../../img/icon/check-circle.svg";
import ButtonPrimary from "../btn/btnPrimary";
import izinOperasi from "../../img/main-photo-webp/izin-operasional-hexa.webp";

const ServiceGridIzin = () => {
  const listIzin = {
    izin: {
      text: "Izin Usaha",
      tags: [
        "OSS-RBA",
        "NIB",
        "Izin Usaha Industri (BKPM)",
        "Izin Usaha Perdagangan",
        "Izin Usaha Konstruksi",
        "PIRT",
        "BPOM",
        "Sertifikat Halal",
        "API-P /API-U",
        "Persetujuan EXIM",
      ],
    },
    disnaker: {
      text: "Rekomendasi Disnaker Untuk",
      tags: [
        "Pengesahan Peraturan Perusahaan / PKB",
        "Pengesahan LKS Bipartit / Serikat",
        "Pelaporan PKWT",
        "Pengesahan Akte Pengawas Ketenagakerjaan",
        "Pengesahan P2K3",
      ],
    },
  };

  const gridLength =
    listIzin?.izin.tags.length >= 7
      ? Math.round(listIzin?.izin.tags.length) / 2
      : listIzin?.izin.tags.length;

  return (
    <div className="py-32 flex gap-x-20  max-w-[1144px] mx-auto relative max-lg:flex-col max-lg:gap-y-5 max-hp:px-5 max-xl:p-10">
      <div className="bg-background-secondary-colors absolute top-0 left-1/2 right-0 bottom-0  -z-10 w-screen max-w-[1440px] -translate-x-1/2"></div>
      <div className="  w-[510px] rounded-3xl overflow-hidden max-lg:w-full">
        <img
          src={izinOperasi}
          alt="izin operasional hexa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="  flex flex-col gap-y-6 ">
        <h2 className="font-medium text-[40px] whitespace-pre -tracking-[-1px] leading-[120%] max-lg:whitespace-normal max-hp:text-2xl max-md:text-3xl">
          Izin Operasional Perusahaan
        </h2>
        <div className="flex flex-col gap-y-3 ">
          <div className="flex flex-col gap-y-3">
            <h3 className=" font-semibold text-[20px] opacity-50">
              {listIzin.izin.text}
            </h3>
            <div
              className="grid grid-flow-col gap-y-3 max-md:flex max-md:flex-col"
              style={{
                gridTemplateRows: `repeat(${Math.round(
                  gridLength
                )}, minmax(0, 1fr))`,
              }}
            >
              {listIzin.izin.tags.map((tag, index) => (
                <div className="flex gap-x-2 items-center" key={index}>
                  <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
                  <p className="text-gray-500 text-[20px] max-hp:text-sm max-md:text-base">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className=" font-semibold text-[20px] opacity-50">
              {listIzin.disnaker.text}
            </h3>
            <div
              className="grid grid-flow-col gap-y-3"
              style={{
                gridTemplateRows: `repeat(${Math.round(
                  gridLength
                )}, minmax(0, 1fr))`,
              }}
            >
              {listIzin.disnaker.tags.map((tag, index) => (
                <div className="flex gap-x-2 items-center" key={index}>
                  <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
                  <p className="text-gray-500 text-[20px] max-hp:text-sm max-md:text-base">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <ButtonPrimary text="Hubungi Kami" wFull={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridIzin;

import React from "react";
import { LuLaptop } from "react-icons/lu";
import IcUserGroup from "../../img/icon/users-group.svg";
import arrowWhite from "../../img/icon-arrow-white.svg";
import PengurusanIzinHexa from "../../img/main-photo-webp/pengurusan-izin-hexa.webp";
import ServiceGridIzin from "../../components/serviceComponent/serviceOpersional";
import ServiceIzinWhite from "../../components/serviceComponent/serviceIzinWhite";

import izinTenagaAsing from "../../img/main-photo-webp/izin-tenaga-asing-hexa.webp";
import ServiceAktaPendirian from "../../components/serviceComponent/serviceAktaPendirian";

const ManagementCosultant = () => {
  const listIzinTenagaKerjaAsing = [
    "RPTKA",
    "Pengasahan / Notifikasi",
    "MERP",
    "ITAS/ITAB",
    "STM",
    "SKPP",
    "SKPTKA",
    "Visa Bisnis (B211)",
    "Visa Kerja (C312)",
    "Visa Investor (C313/314)",
    "Visa Penelitian (C315)",
    "Visa Pendidikan (C316)",
    "Visa Family Union (C317)",
    "Dll",
  ];

  return (
    <div className="">
      <div className="max-w-[1144px] mx-auto py-20 max-xl:px-10 max:lg:py-10 max-hp:px-3">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-text-primary-900 mb-6 max-hp:text-3xl">
            Pengurusan Izin
          </h1>
          <p className="text-text-secondary-700 max-hp:text-sm">
            Kami memiliki tim profesional yang terdiri dari ahli hukum,
            konsultan perizinan, dan staf administrasi yang terlatih akan
            membantu klien dalam memahami persyaratan perizinan yang berlaku,
            mengumpulkan dokumen yang diperlukan, dan menavigasi proses
            aplikasi.
          </p>
        </div>
        <div className="grid grid-cols-10 gap-x-10 mt-16 max-lg:gap-y-5 max-lg:flex max-lg:flex-col-reverse">
          <div className="col-span-3 flex flex-col justify-between min-w-[291px] max-lg:gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <LuLaptop className="w-6 h-6 stroke-2 stroke-bg-footer-blue text-bg-footer-blue" />
                </div>
                <p className="text-text-secondary-700">
                  Izin Operasional Perusahaan
                </p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcUserGroup} alt="user group" />
                </div>
                <p className="text-text-secondary-700">
                  Pengurusan Izin Tenaga Kerja Asing
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-span-7 rounded-2xl overflow-hidden">
            <img
              src={PengurusanIzinHexa}
              className="max-h-[340px] h-full w-full object-cover"
              alt="Pengurusan izin Hexa Indonesia"
            />
          </div>
        </div>
      </div>

      <ServiceGridIzin />
      <ServiceIzinWhite
        wImgSmall={true}
        imgSrc={izinTenagaAsing}
        titleIzin="Visa / Izin Tinggal (ITAS / ITAP)"
        altImage="Visa / Izin Tinggal (ITAS / ITAP)"
        listIzin={listIzinTenagaKerjaAsing}
      />

      <ServiceAktaPendirian />
    </div>
  );
};

export default ManagementCosultant;

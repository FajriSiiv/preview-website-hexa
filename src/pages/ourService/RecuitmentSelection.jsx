import React from "react";
import { LuLaptop } from "react-icons/lu";
import IcUserGroup from "../../img/icon/users-group.svg";
import RekrutmenSeleksi from "../../img/main-photo-webp/rekrutmen-seleksi-hexa.webp";
import lvlOperator from "../../img/main-photo-webp/level-operator.webp";
import lvlStaff from "../../img/main-photo-webp/level-staff.webp";
import ServiceIzinGray from "../../components/serviceComponent/serviceIzinGray";
import ServiceIzinWhite from "../../components/serviceComponent/serviceIzinWhite";

const RecuitmentSelection = () => {
  const listOperator = [
    "Operator Produksi",
    "Operator Forklift",
    "Operator CNC",
    "Operator Painting",
    "Operator Welder",
    "Operator Sortir",
    "Helper, dll",
  ];
  const listStaff = ["Staff", "Supervisor", "Manager", "BOD"];
  return (
    <div>
      <div className="max-w-[1144px] mx-auto py-16 max-xl:px-10 max-hp:px-3 max-hp:py-5 ">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-text-primary-900 mb-6 max-hp:text-2xl max-hp:mb-2">
            Rekrutmen & Seleksi
          </h1>
          <p className="text-text-secondary-700 max-hp:text-sm">
            Kami memberikan jasa layanan perekrutan SDM sesuai dengan
            kualifikasi yang diinginkan oleh klien, mulai dari level operator
            sampai dengan level manajerial. Kami membantu organisasi dalam
            mencari, merekrut, dan memilih karyawan yang berkualitas. Kami
            memberikan layanan mulai dari penilaian kebutuhan tenaga kerja,
            perencanaan rekrutmen, pemasaran lowongan kerja, seleksi kandidat,
            hingga pelaksanaan tes dan wawancara.
          </p>
        </div>
        <div className="grid grid-cols-10 gap-x-10 mt-16 max-lg:gap-y-5 max-lg:flex max-lg:flex-col-reverse">
          <div className="col-span-3 flex flex-col justify-between min-w-[291px] max-lg:gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <LuLaptop className="w-6 h-6 stroke-2 stroke-bg-footer-blue text-bg-footer-blue" />
                </div>
                <p className="text-text-secondary-700">Level Operator</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcUserGroup} alt="user group" />
                </div>
                <p className="text-text-secondary-700">
                  Level Staff hingga Manajerial
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-span-7 rounded-2xl overflow-hidden">
            <img
              src={RekrutmenSeleksi}
              className="max-h-[340px] h-full w-full object-cover object-top"
              alt=" Rekrutmen Seleksi Hexa Indonesia"
            />
          </div>
        </div>
      </div>
      <ServiceIzinGray
        listIzin={listOperator}
        titleIzin="Level Operator"
        imgSrc={lvlOperator}
        altImage="Level Operator Rekrutmen Hexa Indonesia"
      />
      <ServiceIzinWhite
        listIzin={listStaff}
        titleIzin="Level Staff hingga Manajerial"
        imgSrc={lvlStaff}
        altImage="Level Staff Rekrutmen Hexa Indonesia"
        widthText={true}
      />
    </div>
  );
};

export default RecuitmentSelection;

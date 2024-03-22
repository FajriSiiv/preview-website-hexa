import React from "react";
import { LuLaptop } from "react-icons/lu";
import IcUserGroup from "../../img/icon/users-group.svg";
import arrowWhite from "../../img/icon-arrow-white.svg";
import OutsourcingBussiness from "../../img/main-photo-webp/outsourcing-bisnis.webp";
import IntershipBussiness from "../../img/main-photo-webp/intership-bisnis.webp";
import BisnisManajemen from "../../img/main-photo-webp/bisnis-manajemen.webp";
import IcCheck from "../../img/icon/check-circle.svg";
import ButtonPrimary from "../../components/btn/btnPrimary";

const BussinessProccessManagement = () => {
  return (
    <div>
      <div className="relative max-w-[1144px] mx-auto py-20 max-xl:px-10 max:lg:py-10 max-hp:px-3 max-md:px-5">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-text-primary-900 mb-6 max-hp:text-3xl">
            Business Process Management
          </h1>
          <p className="text-text-secondary-700 max-hp:text-sm">
            Kami dapat membantu mengembangkan bisnis Anda dengan berkomitmen
            untuk menyediakan solusi proses bisnis yang transformatif, sehingga
            perusahaan Anda dapat fokus pada bisnis intinya. Kami memberikan
            jasa layanan pengelolaan SDM secara profesional. Serahkan sebagian
            pelaksaan pekerjaan Anda kepada kami.
          </p>
        </div>
        <div className="grid grid-cols-10 gap-x-10 mt-16 max-lg:gap-y-5 max-lg:flex max-lg:flex-col-reverse max-lg:pb-20">
          <div className="col-span-3 flex flex-col justify-between min-w-[291px] max-lg:gap-y-5">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <LuLaptop className="w-6 h-6 stroke-2 stroke-bg-footer-blue text-bg-footer-blue" />
                </div>
                <p className="text-text-secondary-700 ">Outsourcing</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcUserGroup} alt="user group" />
                </div>
                <p className="text-text-secondary-700">Internship</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-span-7 rounded-2xl overflow-hidden">
            <img
              src={BisnisManajemen}
              className="max-h-[340px] h-full w-full object-cover"
              alt="Pengurusan izin Hexa Indonesia"
            />
          </div>
        </div>
        <ServiceOutSourcing />
        <ServiceIntership />
      </div>
    </div>
  );
};

const ServiceOutSourcing = () => {
  const listOutsourcing = [
    "Cleaning Service",
    "Driver",
    "Security",
    "Operator Produksi, dll",
  ];

  return (
    <div className="py-32 flex gap-x-20 relative max-lg:flex-col max-lg:gap-y-5 max-xl:p-10 max-md:px-5 max-hp:px-2 ">
      <div className="bg-background-secondary-colors absolute top-0 left-1/2 right-0 bottom-0  -z-10 w-screen max-w-[1440px] -translate-x-1/2"></div>
      <div className=" rounded-3xl overflow-hidden">
        <img
          src={OutsourcingBussiness}
          alt="izin operasional hexa"
          className="w-[510px] h-full object-cover max-lg:w-full  "
        />
      </div>
      <div className="  flex flex-col gap-y-6 max-hp:gap-y-3">
        <h2 className="font-medium text-[40px] whitespace-pre -tracking-[1px] max-hp:text-2xl">
          Outsourcing
        </h2>
        <p className="text-gray-500 text-[20px] max-w-[554px] max-hp:text-base">
          Menyediakan dan mengelola tenaga kerja dengan keahlian tertentu dan
          dengan status kerja kontrak.
        </p>
        <div className="flex flex-col gap-y-3 ">
          {listOutsourcing.map((list, index) => (
            <div className="flex gap-x-2 items-center" key={index}>
              <img src={IcCheck} alt="ic Check" className="w-5 h-5" />
              <p className="text-gray-500 text-[20px] max-hp:text-base max-md:text-base">
                {list}
              </p>
            </div>
          ))}

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

const ServiceIntership = () => {
  return (
    <div className="py-32 max-w-[1144px] mx-auto max-md:px-5 max-hp:px-2">
      <div className="flex gap-x-20 max-lg:flex-col-reverse max-lg:gap-y-5">
        <div className="max-w-[453px] max-h-[300px] flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-6 max-hp:gap-y-3">
            <h3 className="text-text-primary-900 text-[40px] font-medium -tracking-[1px] max-hp:text-2xl">
              Intership
            </h3>
            <p className="text-[20px] text-gray-500 max-hp:text-base">
              Pelatihan dengan bekerja secara langsung di bawah bimbingan dan
              pengawasan sesuai dengan permenaker No.6 Tahun 2020 tentang
              Penyelenggaraan Pemagangan di Dalam Negeri
            </p>
          </div>
          <ButtonPrimary
            text="Hubungi Kami"
            onClickBtn={() => (window.location.href = "/kontak-kami")}
          />
        </div>
        <div className="flex-grow">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={IntershipBussiness}
              alt="Intership Bussiness Hexa"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessProccessManagement;

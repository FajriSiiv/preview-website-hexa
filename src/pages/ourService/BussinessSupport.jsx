import React from "react";
import { LuLaptop } from "react-icons/lu";
import IcPackage from "../../img/icon/package-ic.svg";
import IcDollar from "../../img/icon/dollar-ic.svg";
import IcCleaning from "../../img/icon/cleaning-ic.svg";
import IcGarden from "../../img/icon/garden-ic.svg";
import BisnisSupport from "../../img/main-photo-webp/bisnis-support.webp";

const BussinessSupport = () => {
  return (
    <div>
      <div className="max-w-[1144px] mx-auto py-16 max-xl:px-10 max:lg:py-10 max-hp:px-3 max-hp:py-5">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-text-primary-900 mb-6 max-hp:text-2xl max-hp:mb-2">
            Business Process Support
          </h1>
          <p className="text-text-secondary-700 max-hp:text-sm">
            Kami memberikan jasa layanan pekerja borongan untuk membantu proses
            bisris Arda, Lavanan kami menghilangkan proses perekrutan internal
            dan biaya kantor yang cukup besar, menawarkan sumber daya
            profesional yang memenuhi syarat untuk secara efektif mengangani
            kebutuhan administratif Anda
          </p>
        </div>
        <div className="grid grid-cols-10 gap-x-10 mt-16  max-lg:gap-y-5 max-lg:flex max-lg:flex-col-reverse">
          <div className="col-span-3 flex flex-col justify-between min-w-[315px]">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcPackage} alt="package group" />
                </div>
                <p className="text-text-secondary-700">Packing</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcDollar} alt="package group" />
                </div>
                <p className="text-text-secondary-700">Payroll Services</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcCleaning} alt="package group" />
                </div>
                <p className="text-text-secondary-700">General Cleaning</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-3 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <img src={IcGarden} alt="package group" />
                </div>
                <p className="text-text-secondary-700">Gardening, etc</p>
              </div>
              <div className="flex items-center gap-x-5">
                <div className="p-4 rounded-full bg-bg-brand border-[1px] border-border-primary-background">
                  <LuLaptop className="w-6 h-6 stroke-2 stroke-bg-footer-blue text-bg-footer-blue" />
                </div>
                <p className="text-text-secondary-700">Proses Produksi</p>
              </div>
            </div>
          </div>
          <div className="col-span-7 ">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={BisnisSupport}
                className="max-h-[340px] h-full w-full object-cover"
                alt="Pengurusan izin Hexa Indonesia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessSupport;

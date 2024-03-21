import React from "react";
import { PiMapPin } from "react-icons/pi";
import phoneCall from "../img/icon/phone-call-01.svg";
import IcGlobe from "../img/icon/globe-02.svg";
import IcMail from "../img/icon/mail-01.svg";

const ContactUs = () => {
  return (
    <div className="pt-32 pb-16 max-w-[1144px] mx-auto max-xl:px-5 max-lg:pt-10">
      <div>
        <h1 className="text-[32px] font-semibold text-text-primary-900">
          Hubungi Kami Segera
        </h1>
        <p className="text-text-secondary-700">
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan,
          komentar, atau permintaan. Tim kami siap membantu Anda dengan senang
          hati.
        </p>
      </div>
      <div className="pt-8 pb-10 grid grid-cols-10 gap-20 items-center w-full max-md:flex max-md:flex-col max-hp:gap-y-10">
        <div className="flex flex-col gap-y-6 col-span-7 max-lg:col-span-5">
          <div className="  relative text-right h-[373px] max-w-[937px] rounded-2xl overflow-hidden">
            <div className="overflow-hidden bg-none h-full w-full">
              <iframe
                title="PT Kreasi Hexa Indonesia"
                className="w-full h-full"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=PT.%20Kreasi%20Hexa%20Indonesia%20Grand%20Wisata,%20Ruko%20Westfield,%20Jl.%20Western%20Boulevard%20No.29%20Blok%20ER5,%20Mustika%20Jaya,%20Kec.%20Mustika%20Jaya,%20Kabupaten%20Bekasi,%20Jawa%20Barat%2017510&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
          <div className="flex gap-x-3 items-center">
            <div className="p-4 rounded-full bg-bg-brand border-[1px] border-bg-border-blue">
              <PiMapPin className="w-6 h-6 text-bg-footer-blue" />
            </div>
            <div className="flex justify-between w-full items-center gap-x-5 max-hp:flex-col max-hp:gap-y-3 max-hp:items-start">
              <div className="flex flex-col gap-1">
                <span className="text-btn-primary-color font-semibold">
                  Kantor
                </span>
                <p className="text-sm text-text-secondary-700 font-medium">
                  Jl. Western Boulevard Ruko Westfield Blok ER 5/29, Grand
                  Wisata, Bekasi 17510
                </p>
              </div>
              <a
                href="https://www.google.com/maps?ll=-6.295769,107.036676&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=14583450948659417255"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 text-btn-primary-color border border-stroke-blue-blue-100 rounded-full text-xs h-fit whitespace-pre"
              >
                Open Map
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-y-16 min-w-[280px] max-lg:col-span-5 max-md:flex-row max-md:justify-between max-md:gap-x-10 max-md:flex-wrap max-hp:flex-col max-hp:gap-y-10">
          <div className="flex gap-x-4  items-center max-md:flex-col gap-y-2">
            <div className="p-4 rounded-full bg-bg-brand border-[1px] border-bg-border-blue">
              <img
                src={phoneCall}
                alt="Phone call svg"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-btn-primary-color font-semibold">
                Nomor Telepon
              </span>
              <p className="text-text-secondary-700 font-medium mb-3">
                (021) 89090094
              </p>
              <span
                // href="#"
                // target="_blank"
                // rel="noreferrer"
                className="py-2 px-3 text-btn-primary-color border border-stroke-blue-blue-100 rounded-full text-xs h-fit font-medium"
              >
                Telepon Kami
              </span>
            </div>
          </div>
          <div className="flex gap-x-4  items-center max-md:flex-col gap-y-2">
            <div className="p-4 rounded-full bg-bg-brand border-[1px] border-bg-border-blue">
              <img src={IcMail} alt="Phone call svg" width={24} height={24} />
            </div>
            <div className="flex flex-col justify-center items-start max-md:items-center">
              <span className="text-btn-primary-color font-semibold">
                Email
              </span>
              <p className="text-text-secondary-700 font-medium mb-3">
                hrlegal@kreasihexa.com
              </p>
              <span
                // href="#"
                // target="_blank"
                // rel="noreferrer"
                className="py-2 px-3 text-btn-primary-color border border-stroke-blue-blue-100 rounded-full text-xs h-fit font-medium"
              >
                Email Kami
              </span>
            </div>
          </div>
          <div className="flex gap-x-4  items-center max-md:flex-col gap-y-2">
            <div className="p-4 rounded-full bg-bg-brand border-[1px] border-bg-border-blue">
              <img
                src={IcGlobe}
                alt="Phone call svg"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start max-md:items-center">
              <span className="text-btn-primary-color font-semibold">
                Website
              </span>
              <p className="text-text-secondary-700 font-medium mb-3">
                www.kreasihexa.com
              </p>
              <a
                href="https://www.kreasihexa.com/"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 text-btn-primary-color border border-stroke-blue-blue-100 rounded-full text-xs h-fit font-medium "
              >
                Kunjungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

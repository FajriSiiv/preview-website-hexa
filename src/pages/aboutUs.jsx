import React from "react";
import ButtonPrimary from "../components/btn/btnPrimary";
import pintuKantorHexa from "../img/main-photo-webp/pintu-kantor-hexa.webp";
import welcomeHexa from "../img/main-photo-webp/welcome-admin-hexa.webp";
import holdHand from "../img/main-photo-webp/visi-misi.webp";
import { GoDotFill } from "react-icons/go";

const AboutUs = () => {
  const listMisi = [
    `Memberikan layanan konsultasi yang terbaik dan solusi HRM yang inovatif untuk memenuhi kebutuhan klien.`,
    "Memberikan solusi yang tepat guna meningkatkan efektivitas bisnis.",
    "Menciptakan sumber daya manusia (SDM) yang unggul melalui sikap pelayanan.",
    "Menerapkan prinsip manajemen HR dalam mengelola sumber daya manusia (SDM).",
  ];

  return (
    <div className=" ">
      <div className="max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5">
        <div className="flex flex-col gap-y-6 py-16 max-xl:py-12">
          <h1 className="text-text-primary-900 text-4xl font-semibold -tracking-[1px] max-hp:text-3xl">
            Kenali Lebih Banyak Tentang{" "}
            <span className="text-btn-primary-color">
              PT Kreasi Hexa Indonesia
            </span>
          </h1>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-3 rounded-lg overflow-hidden max-md:hidden max-md:col-span-0">
              <img
                src={pintuKantorHexa}
                alt="Pintu Kantor Hexa Indonesia"
                className="h-[401px] object-cover"
              />
            </div>
            <div className="col-span-5 rounded-lg overflow-hidden max-md:col-span-8">
              <img
                src={welcomeHexa}
                alt="Welcome Admin Hexa Indonesia"
                height={401}
                className="h-[401px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-y-3">
            <p className="max-w-[914px] w-full text-text-secondary-700 max-xl:w-4/5 max-lg:text-sm max-md:w-full max-md:text-base max-hp:text-sm">
              PT. Kreasi Hexa Indonesia adalah perusahaan konsultan sumber daya
              manusia yang berfokus pada penyediaan solusi terbaik dalam
              manajemen sumber daya manusia bagi perusahaan klien kami. Dengan
              pengalaman yang luas dan tim ahli yang berdedikasi, kami
              memberikan layanan yang terintegrasi dan solusi yang inovatif
              dalam berbagai aspek manajemen sumber daya manusia.
            </p>

            <ButtonPrimary
              text="Hubungi Kami"
              onClickBtn={() => (window.location.href = "/kontak-kami")}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5">
        <div className="pb-[120px] flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-[32px] font-semibold max-hp:text-2xl">
              Visi & Misi
            </h2>
            <p className="text-text-secondary-700 max-hp:text-sm">
              Perusahaan kami berfokus pada komitmen untuk menyediakan solusi
              SDM yang berkualitas dan memberikan nilai tambah bagi klien dan
              mitra bisnisnya.
            </p>
          </div>
          <div className="grid grid-cols-10 gap-x-6">
            <div className="col-span-3 overflow-hidden rounded-lg max-md:hidden max-md:col-span-0">
              <img
                src={holdHand}
                alt="Hexa Visi & Misi - (From Unsplash - Image)"
                className="max-h-[450px] h-full w-full object-cover max-lg:max-h-full"
              />
            </div>
            <div className="col-span-7  flex flex-col justify-start gap-y-4 max-md:col-span-10">
              <div className="flex gap-x-6  border-border-primary-background border-2 p-6 rounded-lg max-hp:flex-col max-hp:gap-y-5">
                {/* <span className="py-3 px-4 font-medium bg-background-secondary-colors border-[1.5px] border-border-primary-background rounded-lg h-fit max-hp:w-fit">
                  01
                </span> */}
                <div className="flex flex-col gap-y-3">
                  <span className="font-semibold text-lg">Visi</span>
                  <p className="text-text-secondary-700 max-hp:text-sm">
                    Membangun mitra strategis terkuat bagi organisasi dalam
                    mencapai keunggulan SDM dan kinerja organisasi yang luar
                    biasa.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6  border-border-primary-background border-2 p-6 rounded-lg max-hp:flex-col max-hp:gap-y-5">
                {/* <span className="py-3 px-[14px] font-medium bg-background-secondary-colors border-[1.5px] border-border-primary-background rounded-lg h-fit max-hp:w-fit">
                  02
                </span> */}
                <div className="flex flex-col gap-y-3">
                  <span className="font-semibold text-lg">Misi</span>
                  <div className="flex flex-col gap-y-2">
                    {listMisi.map((list, index) => (
                      <div className="flex gap-x-2 items-start" key={index}>
                        <div className="w-5 h-5">
                          <GoDotFill className="w-5 h-5 stroke-2 text-fg-quarterary stroke-border-terciary object-contain" />
                        </div>
                        <p className="text-text-secondary-700 leading-5 max-hp:text-sm">
                          {list}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

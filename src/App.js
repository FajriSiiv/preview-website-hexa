import arrowBlack from "./img/icon-arrow-black.svg";
import heroPhoto from "./img/main-photo-webp/main-photo-landing-page.webp";
import currencyDollarIcon from "./img/icon/dollar-ic.svg";
import commitIcon from "./img/icon/komitmen-ic.svg";
import etikaIcon from "./img/icon/etika-bisnis-ic.svg";
import timAhliIcon from "./img/icon/users-group.svg";
import SliderOurProduct from "./components/carousel/SliderOurProduct";
import ButtonPrimary from "./components/btn/btnPrimary";
import SliderTestimonial from "./components/carousel/SliderTestimonial";

// Logo Client
import MPLogo from "./img/client-logo/mp-logo.png";
import CSCLogo from "./img/client-logo/csc-logo.png";
import GMKLogo from "./img/client-logo/gmk-logo.png";
import NipponLogo from "./img/client-logo/nippon-logo.png";
import BasuraLogo from "./img/client-logo/basura-logo.png";
import CogriLogo from "./img/client-logo/cogri-logo.png";
import MKCJLogo from "./img/client-logo/mkcj-logo.png";
import OPLogo from "./img/client-logo/op-logo.png";
import PeccaLogo from "./img/client-logo/pecca-logo.png";
import TiaLogo from "./img/client-logo/tia-logo.png";
import YanfengLogo from "./img/client-logo/yanfeng-logo.png";
import ShirokiLogo from "./img/client-logo/shiroki-logo.png";
import LotteLogo from "./img/client-logo/lotte-logo.png";
import MKGLogo from "./img/client-logo/mkg-logo.png";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5 max-hp:px-3">
        <div className="flex justify-between items-center h-screen max-h-[600px] max-lg:gap-x-2 max-md:items-start max-md:mt-10 max-hp:max-h-[600px]">
          <div className="flex flex-col gap-6 max-w-[586px] max-h-[480px] max-md:gap-y-3 max-hp:gap-y-5">
            <p className=" px-6 py-3 font-semibold bg-[#F8F9FD] rounded-[30px] w-fit  max-lg:text-sm max-hp:text-xs max-hp:px-3 max-hp:py-1.5">
              <span className="text-[#4771FF]">
                Selamat Datang di PT Kreasi Hexa Indonesia
              </span>
              <span className="bg-none">👋</span>
            </p>
            <h1 className="font-semibold text-5xl leading-[120%] text-text-primary-900 -tracking-[1px] max-lg:text-3xl max-lg:max-w-[500px] max-md:text-5xl max-md:leading-snug max-hp:text-3xl max-hp:max-w-[400px] ">
              Meningkatkan Kinerja Organisasi Melalui
              <span className="text-[#194DFF]"> Keunggulan SDM</span>
            </h1>
            <p className="text-text-secondary-900 max-lg:text-sm  max-md:text-base max-hp:text-sm max-hp:max-w-[90%] max-lg:max-w-[420px] max-md:max-w-full ">
              Kami adalah mitra penyedia dan pengelolaan SDM yang terpercaya.
              Dengan pendekatan yang terkini dan terintegrasi, kami membantu
              perusahaan meningkatkan kinerja SDM, mengembangkan bakat, dan
              mencapai tujuan bisnis yang lebih tinggi.
            </p>
            <div className="flex gap-2 max-hp:flex-col max-hp:items-start">
              <div className="max-hp:flex-1">
                <ButtonPrimary
                  text="Hubungi Kami Sekarang"
                  onClickBtn={() => (window.location.href = "/kontak-kami")}
                />
              </div>
              <button
                className="items-center px-6 py-3 flex gap-2
                max-lg:text-sm max-lg:py-2 max-lg:px-4 max-lg:rounded-lg
                max-md:text-base max-md:py-3 max-md:px-5 max-hp:flex-1
                "
                onClick={() => {
                  window.location.href = "#ourbenefit";
                }}
              >
                Pelajari Selengkapnya
                <img src={arrowBlack} className="w-3 h-3" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="max-w-[458px] max-h-[480px] max-lg:max-w-[350px] max-md:hidden w-full overflow-hidden">
            <img
              src={heroPhoto}
              className="object-cover w-full h-[480px] rounded-2xl max-lg:max-h-[400px] max-lg:max-w-[400px] "
              alt="hero main"
              loading="lazy"
            />
          </div>
        </div>
        <BenefitOurCompany />
        <OurProduct />
      </div>
      <div className="relative max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5">
        <div className="bg-background-secondary-colors absolute top-0 left-1/2 right-0 bottom-0  -z-10 w-screen max-w-[1440px] -translate-x-1/2 "></div>
        <OurClient />
      </div>
      <div className="max-w-[1144px] mx-auto max-xl:px-10 max-md:px-5">
        <Testimonial />
      </div>
    </div>
  );
}

const BenefitOurCompany = () => {
  const CardBenefit = ({ textTitle, iconSrc, textDesc, wTextFull = false }) => {
    return (
      <div className="py-8 px-2 flex flex-col items-center justify-center gap-6  max-h-[240px] w-full h-full  bg-white border-2 border-[#F2F4F7] rounded-2xl max-sm:max-w-screen">
        <div className="p-3  rounded-[15px] bg-bg-icon">
          <img src={iconSrc} className="w-7 h-7 " alt="icon src" />
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <h3 className="text-lg font-semibold  text-text-primary-900 max-xl:text-base max-hp:text-xl ">
            {textTitle}
          </h3>
          <p
            className={`text-text-secondary-700 text-center ${
              wTextFull ? "w-[226px]" : ""
            } max-xl:text-xs max-hp:text-sm `}
          >
            {textDesc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col gap-8 pb-[128px]" id="ourbenefit">
      <div className="absolute bg-gradient-to-r from-[#194DFF] to-[#ADC0FF] max-h-[309px] rounded-2xl top-0 left-0 bottom-0 right-0 -z-10"></div>
      <div className="w-full px-10  flex justify-between items-start pt-[58px] text-white max-hp:flex-col max-hp:gap-y-3 max-hp:px-2">
        <h2 className="text-[40px] font-semibold max-w-[469px] w-[45%] leading-[120%] max-lg:text-3xl max-xl:text-4xl max-hp:w-full max-hp:text-center">
          Apa yang Membuat Kami Berbeda?
        </h2>
        <p className="font-medium max-w-[1063px] text-right  w-[55%] max-lg:text-sm max-hp:w-full max-hp:text-center">
          Kami menghadirkan pendekatan inovatif dalam mengelola Sumber Daya
          Manusia (SDM), membawa perubahan positif yang signifikan dalam kinerja
          organisasi Anda.
        </p>
      </div>
      <div className="grid max-md:grid-cols-our-client grid-cols-4 gap-4 px-10 max-hp:px-3">
        <CardBenefit
          iconSrc={currencyDollarIcon}
          textTitle="Efisiensi Biaya"
          textDesc="Solusi yang efisien untuk mengelola SDM dan proses bisnis."
        />
        <CardBenefit
          iconSrc={commitIcon}
          textTitle="Komitmen Pada Kualitas"
          textDesc="Memberikan layanan yang berkualitas tinggi kepada setiap klien."
        />
        <CardBenefit
          iconSrc={etikaIcon}
          textTitle="Etika Bisnis"
          textDesc="Berintegritas tinggi dengan memprioritaskan kepercayaan dan kejujuran."
          // wTextFull={true}
        />
        <CardBenefit
          iconSrc={timAhliIcon}
          textTitle="Tim Ahli"
          textDesc="Didukung oleh tim yang berpengalaman serta kompeten di bidangnya."
        />
      </div>
    </div>
  );
};

const OurProduct = () => {
  return (
    <div className="py-16">
      <div className="text-center flex flex-col gap-6 pb-12">
        <h2 className="text-text-primary-900 font-semibold text-3xl whitespace-pre max-lg:whitespace-normal max-hp:text-2xl">
          Layanan Unggulan untuk Pertumbuhan Organisasi Anda
        </h2>
        <p className="max-w-[775px] w-full text-text-secondary-700 mx-auto max-hp:text-sm">
          Dapatkan wawasan mendalam tentang beragam layanan unggulan yang kami
          tawarkan untuk mengoptimalkan potensi Sumber Daya Manusia (SDM) Anda.
        </p>
      </div>
      <SliderOurProduct />
    </div>
  );
};

const OurClient = () => {
  const listOurClientImg = [
    MKGLogo,
    CSCLogo,
    NipponLogo,
    GMKLogo,
    TiaLogo,
    MPLogo,
    BasuraLogo,
    MKCJLogo,
    CogriLogo,
    OPLogo,
    YanfengLogo,
    ShirokiLogo,
    LotteLogo,
    PeccaLogo,
  ];

  const CardOurClient = ({ src }) => {
    return (
      <div className="h-20 bg-white border-2 border-border-primary-background rounded-lg flex justify-center items-center max-hp:px-3">
        <img src={src} alt="Our Client" />
      </div>
    );
  };

  return (
    <div className="py-32 mt-16 max-md:py-20 max-hp:py-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-text-primary-900 text-[32px] font-semibold max-hp:text-2xl">
          Klien Kami
        </h3>
        <p className="text-text-secondary-700 max-hp:text-sm">
          Kami bangga telah menjadi mitra bagi berbagai perusahaan ternama di
          berbagai sektor industri.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-grid-our-client gap-6 max-hp:grid-cols-2">
        {listOurClientImg.map((list, index) => (
          <CardOurClient key={index} src={list} />
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="py-32 flex flex-col gap-y-20 max-hp:gap-y-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" rounded-full font-semibold bg-bg-icon  py-3 px-6 text-text-brand">
          Testimonial
        </div>
        <h2 className="font-semibold text-[32px] text-text-primary-900 text-2xl max-hp:text-2xl">
          Apa yang Klien Katakan Tentang Kita
        </h2>
        <p className="text-text-secondary-700 max-hp:text-sm">
          Dengarkan apa kata para klien yang telah menggunakan layanan kami.
        </p>
      </div>
      <SliderTestimonial />
    </div>
  );
};

export default App;

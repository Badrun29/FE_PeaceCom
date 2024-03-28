import React from "react";
import HeroBackground from "../../assets/img/HeroBackground.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroBackground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-fit text-white" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="mb-5 lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold">
              Selamat Datang
            </h1>
            <h2 className="mb-5 lg:text-5xl md:text-4xl sm:text-2xl text-xl">
              Di website Pengaduan Online Masyarakat
            </h2>
            <p className="mb-5 lg:text-2xl md:text-xl sm:text-lg text-base">
              Sampaikan laporan anda langsung kepada instansi pemerintah
              berwenang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import CardLatestNews from "../elements/CardLatestNews";
import Img1 from "../../assets/img/minimarket.jpeg";
import Img2 from "../../assets/img/korpusi.jpg";
import Img3 from "../../assets/img/begal.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestNews = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col gap-5 px-4 xl:w-[1280px] w-fit justify-center">
      <h1
        className="text-3xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        Berita Terkini
      </h1>
      <div
        className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CardLatestNews
          ImageNews={Img1}
          date="6 November 2023"
          Judul="Viral Minimarket Ini Punya View Indah. Bisa Jajan Sambil Healing"
        />
        <CardLatestNews
          ImageNews={Img2}
          date="01 December 2023"
          Judul="Desa Sei Limau di Pulau Sebatik Di Nobatkan KPK Sebagai Desa Percontohan Anti Korupsi"
          className="hidden sm:block"
        />
        <CardLatestNews
          ImageNews={Img3}
          date="29 November 2023"
          Judul="Begal Di Bone Babak Belur Diamuk Massa Usai Jatuh Dari Motor Saat Kabur"
          className="hidden xl:block"
        />
      </div>
    </div>
  );
};

export default LatestNews;

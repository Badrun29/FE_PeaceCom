import QuestionImage from "../../assets/img/QuestionImage.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Reason = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className=" flex bg-white min-h-fit py-32 text-black items-center justify-center">
      <div
        className="flex max-w-7xl lg:gap-32 gap-10 lg:flex-row flex-col justify-center items-center lg:w-full xl:p-0 p-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div>
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold">
            Kenapa Menggunakan Website ini?
          </h1>
          <p className="py-6 xl:text-xl md:text-lg text-base">
            Kami berkomitmen menyediakan sarana efektif dan efisien bagi Anda
            berinteraksi dengan pemerintah daerah. Melalui website ini, Anda
            bisa menyampaikan keluhan dan memantau status keluhan secara online.
            Keamanan dan kerahasiaan informasi anda adalah prioritas kami.
            Platform ini membuka jembatan komunikasi antara warga dan
            pemerintah, menciptakan lingkungan yang lebih transparan dan
            responsif. Bersama, mari membangun masyarakat yang lebih baik dengan
            memberikan suara melalui pengaduan Anda di sini. Terima kasih atas
            partisipasi Anda dalam memajukan kualitas hidup bersama-sama!
          </p>
        </div>
        <img
          src={QuestionImage}
          className="sm:max-w-sm sm:max-h-96 max-w-xs max-h-80 rounded-ld"
        />
      </div>
    </div>
  );
};

export default Reason;

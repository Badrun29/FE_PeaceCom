import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "../elements/Accordion";

const PertanyaanUmum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-[80%]">
      <h2
        className="lg:text-2xl text-xl font-bold text-dark pb-5"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Pertanyaan Umum
      </h2>
      <div
        className="flex flex-col gap-5 w-[100%]"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <Accordion
          title="Bagaimana cara mengajukan pengaduan secara online?"
          answer="Untuk mengajukan pengaduan, kunjungi halaman Buat Pengaduan dan ikuti panduan pengisian formulir online. Tetapi anda harus login terlebih dahulu untuk membuat sebuah pengaduan."
        />
        <Accordion
          title="Apakah ada persyaratan khusus untuk membuat pengaduan?"
          answer="Pastikan Anda memberikan informasi yang lengkap dan benar sesuai dengan panduan yang disediakan dalam formulir."
        />
        <Accordion
          title="Berapa lama proses penanganan pengaduan biasanya memakan waktu?"
          answer="Waktu penanganan bervariasi, namun kami berkomitmen untuk menyelesaikan setiap pengaduan secepat mungkin."
        />
        <Accordion
          title="Bagaimana saya dapat melacak status pengaduan saya?"
          answer="Terdapat halaman riwayat pengaduan yang menampilkan status pengaduan atau hubungi pusat informasi untuk mendapatkan pembaruan terkini."
        />
      </div>
    </div>
  );
};

export default PertanyaanUmum;

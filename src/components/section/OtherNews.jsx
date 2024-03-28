import CardOtherNews from "../elements/CardOtherNews";
import Img1 from "../../assets/img/hacker.jpeg";
import Img2 from "../../assets/img/merapi.jpeg";
import Img3 from "../../assets/img/covid.jpeg";
import Img4 from "../../assets/img/israel.jpeg";
import Img5 from "../../assets/img/bmkg.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OtherNews = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 px-4 max-w-[1280px] justify-center">
      <h2
        className="text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Berita Lain
      </h2>
      <div className="grid md:grid-cols-1 sm:grid-cols-2 sm:w-fit sm:h-fit gap-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          <CardOtherNews
            Judul="5 Faktor Penyebab Kebocoran Data Menurut Pengamat"
            date="01 December 2023"
            ImageNews={Img1}
            desc="Di dalam 500.000 sampling tersebut Jimbo mengeklaim mendapatkan data pribadi berupa nama lengkap, NIK, tempat tanggal lahir, alamat lengkap, hingga tempat pemungutan suara yang akan dipergunakan. Data tersebut dijual dengan harga 74.000 dollar AS atau sekitar Rp 1,2 miliar. Kasus ini menambah panjang daftar kebocoran data di Indonesia selama tiga tahun terakhir.Menurut laporan, kasus kebocoran data di Indonesia melonjak 143 persen pada kuartal II-2022. Ada 1,04 juta akun pengguna Indonesia yang mengalami kebocoran data selama periode tersebut.Berlakunya UU Nomor 27 Tahun 2022 kini menjamin perlindungan terhadap data pribadi setiap individu di Indonesia. Selain itu, UU ini juga mendorong setiap lembaga atau perusahaan yang mengelola data pribadi untuk lebih bertanggung jawab dalam memastikan keamanan dan kerahasiaan data tersebut."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CardOtherNews
            Judul="Gunung Merapi Sumbar Meletus, Abu Vulkanik Tembus 3.000 Meter"
            date="03 December 2023"
            ImageNews={Img2}
            desc="Gunung Marapi yang berada wilayah Kabupaten Agam dan Tanah Datar, Sumatera Barat (Sumbar), meletus pada Minggu (3/12/2023). Gunung Marapi dengan ketinggian 2.891 mdpl ini meletus sekitar pukul 14.54 WIB.
Akibatnya, muntahan kolom abu berisi material vulkanik hingga 3.000 meter dari puncak kawah yang disertai suara gemuruh.
Menurut hasil perekaman seismogram Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG), erupsi Gunung Marapi terekam dengan amplitudo maksimum 30 mm dan durasi 4 menit 41 detik.
Peristiwa meletusnya Gunung Marapi ini juga dibenarkan oleh Kepala Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten Agam, Bambang Wasito. Benar. Kondisi Gunung Marapi meletus. Kolom abunya membumbung tinggi ke atas terlihat dari Agam, jelas Bambang seperti dikutip dari keterangan tertulis BNPB, mengutip CNNIndonesia, Minggu (3/12/2023)."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CardOtherNews
            Judul="Kasus Covid Singapura Naik 2X Lipat & Tembus 20 Ribu, Kenapa?"
            date="03 December 2023"
            ImageNews={Img3}
            desc="Jakarta, Indonesia - Kasus Covid-19 di Singapura meningkat dua kali lipat dalam waktu sepekan. Periode 19-25 November 2023 lalu terdapat 22.094 kasus.Kenaikan tersebut, Kementerian Kesehatan menjelaskan kemungkinan karena mulai masuk musim perjalanan akhir tahun. Kekebalan penduduk yang berkurang juga bisa jadi faktor melonjaknya kasus Covid-19 di Singapura.Meski ada peningkatan kasus, tidak diikuti dengan lonjakan jumlah rawat inap karena Covid-19. Kementerian Kesehatan setempat mengingatkan masyarakat tetap melanjutkan vaksinasi.Rata-rata kasus rawat inap dan ICU harian tetap stabil, kata otoritas setempat."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CardOtherNews
            Judul="Israel Bombardir Gaza, Netanyahu Hentikan Perundingan Damai"
            date="01 December 2023"
            ImageNews={Img4}
            desc="Jakarta, Indonesia Militer Israel semakin intens melakukan serangan di Jalur Gaza selatan pada hari Sabtu. Serangan tersebut menjadi ancaman atas perundingan untuk pembebasan sandera dan memulihkan gencatan senjata yang gagal sehari sebelumnya. Babak baru atas perang melawan militan Hamas, angkatan udara Israel mengatakan pihaknya melakukan serangan ekstensif di Khan Younis, sebuah kota di Gaza selatan yang dipenuhi pengungsi yang melarikan diri beberapa minggu sebelum pemboman Israel.Mengutip laporan The Wall Street Journal, angkatan udara Israel mengatakan mereka melakukan 400 serangan selama sehari terakhir. Warga Palestina di daerah tersebut mengatakan ledakan mengguncang gedung-gedung sepanjang malam, sementara direktur sebuah rumah sakit besar di kota tersebut mengatakan ruang gawat darurat dibanjiri dengan korban jiwa. "
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CardOtherNews
            Judul="BMKG Hitung Waktu Tsunami Hantam Selatan Jawa Efek Megathrust"
            date="02 October 2023"
            ImageNews={Img5}
            desc="Jakarta, Indonesia Kepala Badan Meteolorogi, Klimatologi dan Geofisika (BMKG) Dwikorita Karnawati kembali bicara soal potensi ancaman gempa bumi dan tsunami di wilayah pesisir Indonesia. Bahkan, diprediksi ada ancaman gelombang ombak 'raksasa' akan menghantam sejumlah wilayah di Jawa akibat gempa bumi. Dia pun kembali mengingatkan ancaman megathrust di selatan pulau Jawa. Salah satu daerah yang diprediksi akan kena dampaknya adalah Kabupaten Kebumen, Jawa Tengah. Gempa bumi dan tsunami, dua fenomena alam yang sulit diprediksi secara akurat. Saat ini, BMKG tengah melakukan upaya maksimal untuk meningkatkan tingkat akurasi prediksi gempa bumi hingga mencapai 90%, katanya dalam keterangan dikutip dari situs resmi BMKG, Senin (2/10/2023)"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherNews;

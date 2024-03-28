import CardFeature from "../elements/CardFeature";
import ImgUser from "../../assets/img/user-control.png";
import ImgStatus from "../../assets/img/status.png";
import ImgNews from "../../assets/img/News.png";
import ImgTruted from "../../assets/img/Trusted.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureDetails = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="flex w-[100%] min-h-screen bg-white items-center justify-center pb-10"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex flex-col gap-16 items-center max-w-7xl  text-center px-4">
        <h1 className="sm:text-3xl text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full">
          Jenis - Jenis Pelayanan
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-10 align-items-center w-full">
            <CardFeature
              Img={ImgUser}
              Title="Kontrol Pengguna"
              desc="Pengguna dapat membuat laporan sesuai dengan kebutuhan yang ada dan mudah dipahami dalampembuatan laporan."
            />
            <CardFeature
              Img={ImgStatus}
              Title="Cek Status"
              desc="Terdapat status dari masing - masing laporan yang dibuat oleh pengguna, sehingga pengguna dapat memantau status laporan mereka sendiri."
            />
            <CardFeature
              Img={ImgNews}
              Title="Berita"
              desc="Tersedia berita - berita yang ada untuk memberikan beberapa informasi penting."
            />
            <CardFeature
              Img={ImgTruted}
              Title="Terpercaya"
              desc="Laporan akan disampaikan kepada pihak yang berwajib agar segera ditindak lalnjuti terkait aporan yang ada."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;

import { useState, useEffect } from "react";
import NavBarUser from "../components/elements/NavBarUser";
import Button from "../components/elements/Button";
import CardLaporan from "../components/elements/CardLaporan";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../components/elements/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Laporan = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/reports");
      setReports(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        showConfirmButton: true,
        confirmButtonColor: "#1d4ed8",
        text: "Kamu harus login kembali",
      });
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLogin) {
      // Redirect ke halaman login jika pengguna belum login
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <>
      <NavBarUser />
      <div className="flex flex-col bg-slate-200 min-h-screen h-fit pt-[90px] pb-10 items-center gap-6">
        <div className="flex flex-row px-4 max-w-[1280px] w-full h-fit justify-between mt-5">
          <h1 className="text-4xl text-black font-bold ">
            Riwayat Laporan Anda
          </h1>
          <Link to="/buat-laporan">
            <Button type="submit" className="btn-md w-fit text-xl">
              Buat Laporan
            </Button>
          </Link>
        </div>
        <div
          className="flex flex-col gap-5 px-4 w-full max-w-7xl h-fit items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {reports.map((report) => (
            <CardLaporan
              key={report.id}
              image={report.url}
              tanggal={formatDate(report.createdAt)}
              alamat={report.alamat}
              nama={report.name}
              laporan={report.pengaduan}
              status={report.status}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Laporan;

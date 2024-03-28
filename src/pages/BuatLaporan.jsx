import { useEffect } from "react";
import NavBarUser from "../components/elements/NavBarUser";
import FormBuatLaporan from "../components/section/FormBuatLaporan";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/elements/Footer";

const BuatLaporan = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      // Redirect ke halaman login jika pengguna belum login
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <NavBarUser />
      <FormBuatLaporan />
      <Footer />
    </>
  );
};

export default BuatLaporan;

import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";
import DataShow from "../components/elements/DataShow";
import CardPengaduanAdmin from "../components/elements/CardPengaduanAdmin";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setFulfilled } from "../features/authSlice";
import PetugasIcon from "../assets/icons/Petugas.svg";
import PengaduanIcon from "../assets/icons/PengaduanIcon.svg";
import PengaduanAcc from "../assets/icons/PengaduanIcon-Acc.svg";
import PengaduanTertunda from "../assets/icons/PengaduanIcon-Pending.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  window.scrollTo(0, 0);

  // const [name, setName] = useState("");
  const [countPetugas, setCountPetugas] = useState(0);
  const [countPengaduan, setCountPengaduan] = useState(0);
  const [countPengaduanAcc, setCountPengaduanAcc] = useState(0);
  const [countPengaduanTertunda, setCountPengaduanTertunda] = useState(0);
  const [reports, setReports] = useState([]);
  // const [message, setMessage] = useState("");
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/reports");
      setReports(response.data);

      const allReports = response.data;
      const acceptedReports = allReports.filter(
        (report) => report.status === "Diterima"
      );
      const pendingReports = allReports.filter(
        (report) => report.status === "Tertunda"
      );
      setCountPengaduan(allReports.length);
      setCountPengaduanAcc(acceptedReports.length);
      setCountPengaduanTertunda(pendingReports.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMe();
  });

  const getMe = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/me");
      dispatch(setFulfilled(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/users");
      const allRole = response.data;

      const Role = allRole.filter((role) => role.role === "admin");

      setCountPetugas(Role.length);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center bg-slate-200">
        {/* Page content here */}
        <NavBarAdmin>Dashboard </NavBarAdmin>
        <div className="w-full h-full p-6 flex flex-col gap-6">
          <div
            className="grid xl:grid-rows-1 xl:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 xl:w-full sm:w-[600px] gap-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <DataShow
              icon={PetugasIcon}
              title="Petugas"
              jumlah={countPetugas}
            />
            <DataShow
              icon={PengaduanIcon}
              title="Total Pengaduan"
              jumlah={countPengaduan}
            />
            <DataShow
              icon={PengaduanAcc}
              title="Pengaduan Diterima"
              jumlah={countPengaduanAcc}
            />
            <DataShow
              icon={PengaduanTertunda}
              title="Pengaduan Tertunda"
              jumlah={countPengaduanTertunda}
            />
          </div>
          <div
            className="bg-white flex flex-col w-full h-fit p-6 rounded-xl gap-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-3xl font-bold">Pengaduan Terbaru</h2>
            <div className="flex flex-col w-full h-fit gap-4 place-items-center">
              {reports.map((report) => (
                <CardPengaduanAdmin
                  key={report.reportId}
                  image={report.url}
                  nama={report.name}
                  tanggal={formatDate(report.createdAt)}
                  alamat={report.alamat}
                  laporan={report.pengaduan}
                  badgetitle={report.status}
                  id={report.reportId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Dashboard;

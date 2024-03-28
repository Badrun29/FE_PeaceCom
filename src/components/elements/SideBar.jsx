import Button from "../../components/elements/Button";
import DashboardIcon from "../../assets/icons/Dashboard.svg";
import LaporanIcon from "../../assets/icons/Laporan.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";
import PetugasIcon from "../../assets/icons/Petugas.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { resetState } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOUt = async () => {
    const response = await axios.post("http://localhost:5000/api/v1/logout");

    const status = response.data.message;

    Swal.fire({
      icon: "success",
      title: `${status}`,
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/");
    dispatch(resetState());
  };

  return (
    <div className="drawer-side z-20">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div
        className="flex flex-col gap-2 p-4 w-80 min-h-full bg-blue-700
       text-white justify-between"
      >
        {/* Sidebar content here */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <h2 className="w-fit text-2xl font-extrabold">
              Pengaduan <br /> Masyarakat
            </h2>
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button w-fit h-fit bg-transparent border-none lg:hidden"
            >
              <svg
                className="w-7 h-fit p-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </label>
          </div>
          <div className="w-full h-full flex flex-col gap-4">
            <p className="text-lg font-semibold">Fitur Admin</p>
            <div className="flex flex-col gap-4">
              <Link
                to="/dashboard"
                className="flex flex-row items-center gap-4"
              >
                <img src={DashboardIcon} alt="icon" className="w-6 h-6" />
                Dashboard
              </Link>
              <Link
                to="/pengaduan"
                className="flex flex-row items-center gap-4"
              >
                <img src={LaporanIcon} alt="icon" className="w-6 h-6" />
                Pengaduan
              </Link>
              <Link to="/petugas" className="flex flex-row items-center gap-4">
                <img src={PetugasIcon} alt="icon" className="w-6 h-6" />
                Petugas
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">
          <Button
            type="submit"
            onClick={logOUt}
            className="w-full h-fit focus:bg-blue-700 justify-start"
          >
            <img src={LogoutIcon} alt="icon" className="w-8 h-8" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

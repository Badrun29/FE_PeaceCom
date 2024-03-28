import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const Petugas = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [users, setUsers] = useState([]);
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      // Redirect ke halaman login jika pengguna belum login
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/users");
      const allRole = response.data;

      const Role = allRole.filter((role) => role.role === "admin");

      setUsers(Role);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (uuid) => {
    await axios.delete(`http://localhost:5000/api/v1/user/${uuid}`);
    Swal.fire({
      icon: "success",
      title: "Petugas berhasil dihapus",
      showConfirmButton: false,
      timer: 2500,
    });
    getUsers();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 items-center ">
        {/* Page content here */}
        <NavBarAdmin>Petugas</NavBarAdmin>
        <div
          className="w-full h-fit p-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="overflow-x-auto rounded-xl w-full">
            <table className="table table-auto">
              {/* head */}
              <thead className="">
                <tr className="bg-blue-700 text-white">
                  <th>NO</th>
                  <th>NAMA</th>
                  <th>NO TELP</th>
                  <th>LEVEL</th>
                  <th>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => (
                  <tr className="bg-white" key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.noTelp}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs text-red-600 p-0"
                        onClick={() => deleteUser(user.uuid)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SideBar />
    </div>
  );
};

export default Petugas;

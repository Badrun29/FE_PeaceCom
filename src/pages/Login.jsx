import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../components/elements/InputText";
import ImgLogin from "../assets/img/ImgLogin.png";
import Button from "../components/elements/Button";
import { setPending, setFulfilled, setRejected } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auth);

  axios.defaults.withCredentials = true;
  const Auth = async (e) => {
    e.preventDefault();
    dispatch(setPending());

    if (!email || !password) {
      return dispatch(setRejected());
    }

    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        email,
        password,
      });
      const userRole = response.data.role;

      if (userRole === "admin") {
        navigate("/dashboard");
      } else if (userRole === "user") {
        navigate("/");
      } else {
        console.warn("Unknown user role:", userRole);
      }

      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        showConfirmButton: false,
        timer: 1500,
      });

      setEmail("");
      setPassword("");
      setMessage(response.data);
      dispatch(setFulfilled());
    } catch (error) {
      dispatch(setRejected());
      setMessage(error.response.data.error);
    }
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex flex-row bg-gradient-to-b from-[#003F9A] to-[#2871CC] ">
        <div className="h-screen w-1/2 hidden lg:block">
          <img src={ImgLogin} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:w-1/2 h-screen w-full flex flex-col items-center justify-center gap-8 py-16">
          <h1
            className="text-4xl font-bold text-white text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Layanan Online <br /> Website Pengaduan Masyarakat
          </h1>
          <form
            data-aos="fade-up"
            data-aos-duration="2000"
            onSubmit={Auth}
            className="lg:w-3/4 w-[80%] h-fit py-8 px-14 bg-white flex flex-col items-center justify-center gap-6 rounded-[20px]"
          >
            <h2 className="text-3xl font-bold pb-3 text-black">Login</h2>
            {isError && message ? (
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{message}</span>
              </div>
            ) : null}
            <InputText
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </Button>
            <p className="text-sm text-slate-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </p>
            <Link to="/" className="text-gray-400 font-regular text-sm">
              Kembali
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

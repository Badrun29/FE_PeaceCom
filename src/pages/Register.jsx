import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgLogin from "../assets/img/ImgLogin.png";
import InputText from "../components/elements/InputText";
import Button from "../components/elements/Button";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        {
          name,
          email,
          noTelp,
          password,
          confPassword,
          role: "user",
        }
      );

      setName("");
      setEmail("");
      setNoTelp("");
      setPassword("");
      setConfPassword("");
      setIsLoading(false);
      setIsError(false);
      setMessage(response.data);

      Swal.fire({
        icon: "success",
        title: response.data,
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/login");
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data);
      setIsLoading(false);
      setIsLoading(false);
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
        <div className="lg:w-1/2 h-screen w-full flex flex-col items-center justify-center gap-8 py-14">
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
            onSubmit={handleRegister}
            className="flex flex-col items-center justify-center gap-6 w-[80%] lg:w-full"
          >
            <div className="lg:w-3/4  h-fit py-6 px-14 bg-white flex flex-col items-center justify-center gap-6 rounded-[20px]">
              <h2 className="text-3xl font-bold pb-3 text-black">Register</h2>
              {isError ? (
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
                placeholder="Nama"
                onChange={(e) => setName(e.target.value)}
              />
              <InputText
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputText
                type="text"
                placeholder="No. Hp"
                onChange={(e) => setNoTelp(e.target.value)}
              />
              <InputText
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputText
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Register"
                )}
              </Button>
              <p className="text-sm text-slate-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-blue-700 font-bold">
                  Login
                </Link>
              </p>
              <Link to="/" className="text-gray-400 font-regular text-sm">
                Kembali
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

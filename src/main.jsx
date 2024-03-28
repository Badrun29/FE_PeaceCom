import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import BeritaPage from "./pages/Berita.jsx";
import Faq from "./pages/Faq.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Petugas from "./pages/Petugas.jsx";
import Pengaduan from "./pages/Pengaduan.jsx";
import BuatLaporan from "./pages/BuatLaporan.jsx";
import RiwayatLaporan from "./pages/RiwayatLaporan.jsx";
import { Provider } from "react-redux";
import store from "./apps/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/berita",
    element: <BeritaPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/riwayat-laporan",
    element: <RiwayatLaporan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/buat-laporan",
    element: <BuatLaporan />,
  },
  {
    path: "/petugas",
    element: <Petugas />,
  },
  {
    path: "/pengaduan",
    element: <Pengaduan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

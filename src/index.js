import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import ManagementCosultant from "./pages/ourService/ManagementCosultant";
import RecuitmentSelection from "./pages/ourService/RecuitmentSelection";
import BussinessProccessManagement from "./pages/ourService/BussinessProccessManagement";
import BussinessSupport from "./pages/ourService/BussinessSupport";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/tentang-kami",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/layanan-kami/pengurusan-izin",
    element: (
      <Layout>
        <ManagementCosultant />
      </Layout>
    ),
  },
  {
    path: "/layanan-kami/rekrutmen-seleksi",
    element: (
      <Layout>
        <RecuitmentSelection />
      </Layout>
    ),
  },
  {
    path: "/layanan-kami/proses-bisnis-manajemen",
    element: (
      <Layout>
        <BussinessProccessManagement />
      </Layout>
    ),
  },
  {
    path: "/layanan-kami/proses-bisnis-support",
    element: (
      <Layout>
        <BussinessSupport />
      </Layout>
    ),
  },
  {
    path: "/kontak-kami",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

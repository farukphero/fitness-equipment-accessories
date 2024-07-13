import { Outlet } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import { Footer } from "../components/home/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

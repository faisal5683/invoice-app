import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[140px] sm:mt-[88px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

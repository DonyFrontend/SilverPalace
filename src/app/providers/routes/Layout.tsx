import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-[50px] ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

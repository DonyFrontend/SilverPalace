import { RoutesObject } from "@/shared/config/router.config";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Route, Routes } from "react-router-dom";

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <div className="mt-[70px] ">
        <Routes>
          {Object.values(RoutesObject).map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export { RoutesComponent };

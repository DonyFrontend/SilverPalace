import { CustomLink } from "@/shared/ui/custom-link";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[70px] fixed top-0 left-0 flex items-center justify-between px-10 bg-main text-white border-b border-b-white">
      <div className="w-1/2">
        <p
          onClick={() => navigate("/")}
          className="font-bold text-[35px] cursor-pointer"
        >
          SPG
        </p>
      </div>
      <div className="w-full justify-between items-center flex">
        <nav className="flex gap-5">
          <CustomLink to="/">Главная</CustomLink>
          <CustomLink to="/news">Новости</CustomLink>
          <CustomLink to="/guides">Гайды</CustomLink>
          <CustomLink to="/characters">Персонажи</CustomLink>
        </nav>
        <div className="flex gap-5">
          <button className="cursor-pointer px-5 p-2 bg-blue-700 rounded-[10px]">Регистрация</button>
          <button className="cursor-pointer px-5 p-2 border-2 border-blue-700 rounded-[10px]">Войти</button>
        </div>
      </div>
    </header>
  );
};

export { Header };

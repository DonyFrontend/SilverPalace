import background from "@/shared/assets/images/silver-studio.png";
import { CustomLink } from "@/shared/ui/custom-link";
import { SwiperComponent } from "@/widgets/swiper";
import { useTranslation } from "react-i18next";
import { swiper_data } from "../model/utils/swiper-data";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-white">
      <div
        className="w-full h-[100svh] flex justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>{" "}
        <div className="w-[90%] flex flex-col justify-around items-start gap-y-5 z-10 relative">
          <div className="flex flex-col gap-y-16">
            <header className="w-[80%] h-[70px] z-50 rounded-4xl flex items-center justify-center px-10 bg-main text-white">
              <nav className="flex gap-5">
                <CustomLink to="/">{t("Home")}</CustomLink>
                <CustomLink to="/news">{t("News")}</CustomLink>
                <CustomLink to="/guides">{t("Guides")}</CustomLink>
                <CustomLink to="/characters">{t("Characters")}</CustomLink>
              </nav>
            </header>
            <div className="flex flex-col gap-y-7">
              <h1 className="text-5xl font-bold">
                Исследуй мир Silver Palace вместе с нами
              </h1>
              <p className="text-[20px] w-2/3">
                Гайды, персонажи, лор и последние новости по игре Silver Palace.
                Мы собираем всё в одном месте.
              </p>
            </div>
          </div>
          <div className="max-w-1/3">
            <SwiperComponent data={swiper_data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };

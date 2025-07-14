import Telegram from '@/shared/assets/icons/telegram-svgrepo-com.svg'
import Donate from '@/shared/assets/icons/donate-donation-svgrepo-com.svg'
import Discord from '@/shared/assets/icons/discord-v2-svgrepo-com.svg'
import X from '@/shared/assets/icons/icons8-x.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const [t] = useTranslation();

  return (
    <footer className="w-full mt-10 left-0 flex items-center py-5 px-10 bg-main text-white border-t border-t-white">
      <div className="flex flex-col w-[50%]">
        <h1 className="font-bold text-[35px]">SPG</h1>
        <Link to={'/AboutUs'} className="text-[25px] pt-5 pb-2 font-semibold">{t("About_Us")}</Link>
        <p className="pt-10 w-[60%]">© {t("Warning")}</p>
      </div>

      <div className="flex flex-col">
        <nav className="flex gap-x-5 flex-wrap">
          <a href="https://t.me/leaks_silverpalace" target="_blank">
            <img src={Telegram} className='w-10' alt='Telegram' />
          </a>
          <a href="https://www.donationalerts.com/r/Dony012" target="_blank">
            <img src={Donate} className='w-10' alt="Donate" />
          </a>
          <a href="https://discord.gg/Rus3QU58" target="_blank">
            <img src={Discord} className='w-10' alt="Discord" />
          </a>
          <a href="https://x.com/SilverPalace_EN" target="_blank">
            <img src={X} className='w-10' alt="X" />
          </a>
        </nav>
      </div>
    </footer>
  )
};

export { Footer };

import {
  AuthWindow,
  type AuthWindowProps,
} from "@/widgets/auth-window/ui/AuthWindow";
import { useTranslation } from "react-i18next";
import { logInTC } from "../model/log-in.service";

const LogIn = () => {
  const { t } = useTranslation();
  const data: AuthWindowProps = {
    title: t("Log_In"),
    buttonText: "Отправить",
    inputs: [
      {
        id: "name",
        name: "name",
        placeholder: "Введите ваш ник или почту",
        type: "text",
        maxLength: 50,
      },
      {
        id: "password",
        name: "password",
        placeholder: "Введите пароль",
        type: "password",
        maxLength: 100,
      },
    ],
    policy: <div>Наша авторизация не относится к авторизаций гугл</div>,
    undertext: <div>еще нет аккаунта ? тогда зачем ты сюда зашел, лол</div>,
    func: logInTC,
  };
  return (
    <div className="text-white">
      <AuthWindow data={data} />
    </div>
  );
};

export { LogIn };

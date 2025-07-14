import { AuthWindow } from "@/widgets/auth-window";
import type { AuthWindowProps } from "@/widgets/auth-window/ui/AuthWindow";
import { useTranslation } from "react-i18next";
import { signUpTC } from "../model/sign-up.service";

const SignUp = () => {
  const { t } = useTranslation();
  const data: AuthWindowProps = {
    title: t("Sign_Up"),
    buttonText: "Отправить",
    inputs: [
      {
        id: "email",
        name: "email",
        placeholder: "Введите почту",
        type: "email",
      },
      {
        id: "password",
        name: "password",
        placeholder: "Введите пароль",
        type: "password",
        maxLength: 100,
      },
      {
        id: "name",
        name: "name",
        placeholder: "Введите ваш ник",
        type: "text",
        maxLength: 50,
      },
    ],
    policy: <div>Наша авторизация не относится к авторизаций гугл</div>,
    undertext: <div>уже есть аккаунт ? тогда зачем ты сюда зашел, лол</div>,
    func: signUpTC,
  };

  return (
    <div className="text-white">
      <AuthWindow data={data} />
    </div>
  );
};

export { SignUp };

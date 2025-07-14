import { AuthWindow } from "@/widgets/auth-window";
import type { AuthWindowProps } from "@/widgets/auth-window/ui/AuthWindow";
import { useTranslation } from "react-i18next";
import { signUpTC } from "../model/sign-up.service";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { t } = useTranslation();
  const data: AuthWindowProps = {
    title: t("Sign_Up"),
    buttonText: t("Submit"),
    inputs: [
      {
        id: "email",
        name: "email",
        placeholder: t("Email"),
        type: "email",
      },
      {
        id: "password",
        name: "password",
        placeholder: t("Password"),
        type: "password",
        maxLength: 100,
      },
      {
        id: "name",
        name: "name",
        placeholder: t("Nickname"),
        type: "text",
        maxLength: 50,
      },
    ],
    policy: <div>{t("Notgoogle")}</div>,
    undertext: <div>{t("HaveAccount")} <Link className="text-blue-500 hover:text-blue-600" to={'/login'}>{t("Log_In")}</Link></div>,
    func: signUpTC,
  };

  return (
    <div className="text-white">
      <AuthWindow data={data} />
    </div>
  );
};

export { SignUp };

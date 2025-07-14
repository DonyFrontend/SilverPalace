import {
  AuthWindow,
  type AuthWindowProps,
} from "@/widgets/auth-window/ui/AuthWindow";
import { useTranslation } from "react-i18next";
import { logInTC } from "../model/log-in.service";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { t } = useTranslation();
  const data: AuthWindowProps = {
    title: t("Log_In"),
    buttonText: t("Submit"),
    inputs: [
      {
        id: "name",
        name: "name",
        placeholder: t("NickOrEmail"),
        type: "text",
        maxLength: 50,
      },
      {
        id: "password",
        name: "password",
        placeholder: t("Password"),
        type: "password",
        maxLength: 100,
      },
    ],
    policy: <div>{t("Notgoogle")}</div>,
    undertext: <div>{t("HaveNoAcc")} <Link className="text-blue-500 hover:text-blue-600" to={'/sign-up'} >{t("Registr")}</Link></div>,
    func: logInTC,
  };
  return (
    <div className="text-white">
      <AuthWindow data={data} />
    </div>
  );
};

export { LogIn };

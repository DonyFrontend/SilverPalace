import { LogIn, SignUp } from "@/features/auth";
import { AboutUs } from "@/pages/AboutUs";
import { Main } from "@/pages/main";
import type React from "react";

export enum RouterEnum {
  MAIN = "/",
  SIGNUP = "/sign-up",
  LOGIN = "/log-in",
  ABOUTUS = '/AboutUs'
}

export interface RouterType {
  path: string;
  element: React.ReactNode;
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
  [RouterEnum.MAIN]: {
    path: RouterEnum.MAIN,
    element: <Main />,
  },
  [RouterEnum.SIGNUP]: {
    path: RouterEnum.SIGNUP,
    element: <SignUp />,
  },
  [RouterEnum.LOGIN]: {
    path: RouterEnum.LOGIN,
    element: <LogIn />,
  },
  [RouterEnum.ABOUTUS]: {
    path: RouterEnum.ABOUTUS,
    element: <AboutUs />,
  },
};

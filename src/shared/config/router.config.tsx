import { AboutUs } from "@/pages/AboutUs";
import { Main } from "@/pages/main";
import type React from "react";

export enum RouterEnum {
  MAIN = "/",
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
  [RouterEnum.ABOUTUS]: {
    path: RouterEnum.ABOUTUS,
    element: <AboutUs />,
  },
};

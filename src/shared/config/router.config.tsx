import { Main } from "@/pages/main";
import type React from "react";

export enum RouterEnum {
  MAIN = "/",
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
};

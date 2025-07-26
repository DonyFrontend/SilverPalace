import { LogIn, SignUp } from "@/features/auth";
import { AboutUs } from "@/pages/AboutUs";
import { Main } from "@/pages/main";
import type React from "react";
import { lazy } from "react";

export enum RouterEnum {
  MAIN = "/",
  SIGNUP = "/sign-up",
  LOGIN = "/log-in",
  ABOUTUS = "/AboutUs",
  CHARACTERS = "/characters",
  NEWS = "/news",
  GUIDES = "/guides",
}

const LazyCharacters = lazy(() => import("@/pages/characters/ui/Characters"));
const LazyNews = lazy(() => import("@/pages/news/ui/News"));
const LazyGuides = lazy(() => import("@/pages/guides/ui/Guides"));

export interface RouterType {
  path: string;
  element: React.ReactNode; //;
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
  [RouterEnum.NEWS]: {
    element: <LazyNews />,
    path: RouterEnum.NEWS,
  },
  [RouterEnum.ABOUTUS]: {
    path: RouterEnum.ABOUTUS,
    element: <AboutUs />,
  },
  [RouterEnum.CHARACTERS]: {
    path: RouterEnum.CHARACTERS,
    element: <LazyCharacters />,
  },
  [RouterEnum.GUIDES]: {
    path: RouterEnum.GUIDES,
    element: <LazyGuides />,
  },
};

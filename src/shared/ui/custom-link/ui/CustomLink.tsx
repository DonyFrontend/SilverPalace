import type { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

const CustomLink = ({ to, children }: Props) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={`text-white font-bold text-[20px] hover:bg-hover px-5 p-2 rounded-[10px] ${
        match && "bg-active"
      }`}
    >
      {children}
    </Link>
  );
};

export { CustomLink };

import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
};

const Button: React.FC<Props> = ({ children, to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex justify-center items-center px-5 p-3 bg-gray-700 hover:bg-gray-800 rounded-2xl cursor-pointer font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;

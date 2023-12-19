import React from "react";
import { useTheme } from "next-themes";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
          theme === "dark" ? "text-sky-300 font-bold" : "text-sky-300 text-white"
        }  transition-all duration-250 ease-out first:ml-0 hover:scale-105 hover:bg-slate-700 active:scale-100`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-250 hover:text-white-800 ${
        theme === "dark"
          ? "hover: text-white "
          : "hover:"
      } hover:scale-105 hover:text-gray-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover: shadow-lg hover:shadow-blue-500/50 active:scale-100  tablet:first:ml-0 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;

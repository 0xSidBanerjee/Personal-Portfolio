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
          theme === "dark" ? "bg-gradient-to-r from-rose-500 via-rose-200 to-blue-300 text-black font-bold" : "bg-royal-purple text-white"
        }  transition-all duration-250 ease-out first:ml-0 hover:scale-105 active:scale-100`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-250 hover:text-sky-300 ${
        theme === "dark"
          ? "hover: text-white "
          : "hover:"
      } hover:scale-105 hover:bg-slate-800 active:scale-100  tablet:first:ml-0 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;

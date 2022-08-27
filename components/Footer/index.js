import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({ dark }) => {
  return (
    <>
      <div className="ml-10 mt-10 laptop:mt-20 p-2 laptop:p-0">
        <h1 className="text-2xl text-bold font-medium">Want to reach out about a project or just want to say a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-200 to-blue-300">Friendly Hello?</span></h1>
        <div className="mt-1">
          <Socials />
        </div>
      </div>
      <h1 className="ml-10 text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 text-gray-400 font-bold">
         Thanks for checking my website <span className="text-purple-300">&lt;3</span> <br /> Its a work in progress so check back often!
      </h1>
    </>
  );
};

export default Footer;

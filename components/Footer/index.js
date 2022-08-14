import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({ dark }) => {
  return (
    <>
      <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
        <h1 className="text-2xl text-bold font-medium">Want to reach out about a project or just want to say a <span className="text-royal-purple text-">Friendly Hello?</span></h1>
        <div className="mt-1">
          <Socials />
        </div>
      </div>
      <h1 className="mr-8 text-sm text-bold mt-2 laptop:mt-14 p-2 laptop:p-0">
         Thanks for checking my website!<br /> its a work in progress so check back often!
      </h1>
    </>
  );
};

export default Footer;

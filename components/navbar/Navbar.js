import Image from "next/image";
import Link from "next/link";
import React from "react";
import findJobsLogo from "../../public/images/findJobsLogo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-[1240px] h-[50] absolute left-[100px] top-[30px]">
      <Image src={findJobsLogo} alt="logo" layout="fixed" />
      <div className="flex items-center w-[454.5px] h-[40px] left-[780px] space-x-5 rounded-[6px] ">
        <Link href="/">
          <p className="cursor-pointer text-navMenuTxt text-white">Jobs</p>
        </Link>
        <Link href="/company">
          <p className="cursor-pointer text-navMenuTxt text-white">
            Company Review
          </p>
        </Link>
        <Link href="/salaries">
          <p className="cursor-pointer text-navMenuTxt text-white">
            Find Salaries
          </p>
        </Link>
        <Link href="/login">
          <button className="bg-[#FFEDED] text-center text-postJobColor font-bold w-[85px] h-[40px] p-[10px] rounded-[6px] left-[1149.5px]">
            Post Job
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import GuestSearchBar from "./GuestSearchBar";
import Navbar from "./navbar/Navbar";

function HeaderSection() {
  return (
    <div className="bg-[#E5E5E5] relative h-[379px] w-[1453px]">
      <div className="w-[1440px] h-[343px] bg-[#0F4A7B] absolute top-0 left-0">
        <Navbar />{" "}
        <p className="text-djTxt text-white tracking-djTxt w-[471px] h-[49px] absolute top-[165px] left-[146px] ">
          Find Your Dream Job
        </p>
        <p className="border-2 border-solid rounded-full border-ellipse_a w-[100px] h-[100px] absolute top-[100px] left-[1353px]"></p>
        <p className="border-2 border-solid rounded-full border-ellipse_b w-[50px] h-[50px] absolute  top-[200px] left-[1317px]"></p>
        <p className="border-2 border-solid rounded-full border-ellipse_c w-[50px] h-[50px] absolute top-[263px] left-[1267px] "></p>
      </div>
      <GuestSearchBar />
    </div>
  );
}

export default HeaderSection;

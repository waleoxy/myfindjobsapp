import Image from "next/image";
import React from "react";
import findJobsLogo from "../public/images/findJobsLogo.png";
import loginPng from "../public/images/loginPng.png";

function login() {
  return (
    <div className="bg-[#F9FBFD] w-screen relative h-screen">
      <div className="bg-[#0F4A7B] w-[743px] absolute left-0 top-0 h-[1025px]">
        <div className="flex-col justify-between items-center w-[127px] h-[54.73px] absolute left-[82px] top-[34.83px]">
          <Image src={findJobsLogo} alt="logo" layout="fixed" />
          <p className="text-white">for employers</p>
        </div>
        <div className="flex-col items-center w-[539px] h-[542px] absolute left-[50px] top-[267px]">
          <p className="text-loginTxt text-white font-extrabold items-center w-[539px]">
            Find the best candidates for your organisation.
          </p>
          <Image src={loginPng} alt="logo" layout="fixed" />
        </div>
      </div>{" "}
      <div className="bg-[#F57D7D] w-[205px] absolute left-[606px] top-[-1px] h-[1025px]"></div>
      <div className="flex-col justify-items-start w-[489px] absolute left-[858px] top-[319px] h-[438px]">
        <p className="w-[97px] h-[39px] text-[32px] font-extrabold">Login</p>
        <form className="w-[489px] static left-0 my-[43px] top-[82px] h-[356px]">
          <label className="w-[489px] h-[103px] ">
            <p className="w-[94px] h-[21px] text-navMenuTxt font-normal">
              Email
            </p>
            <input
              className="border-2 border-ellipse_c mt-3 mb-6 w-[486px] h-[69px] rounded-xl"
              name="Email"
              type="email"
              value
              onChange
            />
          </label>
          <label className="w-[489px] h-[103px] ">
            <p className="w-[94px] h-[21px] text-navMenuTxt font-normal">
              Password
            </p>
            <input
              className="border-2 border-ellipse_c mt-3 w-[486px] h-[69px] rounded-xl"
              name="Password"
              type="password"
              value
              onChange
            />
          </label>
          <button className="mt-3 text-navMenuTxt font-extrabold rounded-xl text-white flex justify-center items-center w-[180px] h-[68px] bg-postJobColor p-2.5">
            Login
          </button>
        </form>
      </div>
      <div>
        {" "}
        <p className="border-2 border-solid rounded-full border-ellipse_b w-[50px] h-[45.72px] absolute  top-[182.87px] left-[1317px]"></p>
        <p className="border-2 border-solid rounded-full border-ellipse_c w-[50px] h-[45.72px] absolute top-[240.48px] left-[1267px] "></p>
        <p className="border-2 border-solid rounded-full border-ellipse_a w-[100px] h-[91.44px] absolute top-[91.44px] left-[1353px]"></p>
      </div>
    </div>
  );
}

export default login;

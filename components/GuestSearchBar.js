import React from "react";
import { LocationMarkerIcon, SearchIcon } from "@heroicons/react/outline";

function GuestSearchBar() {
  return (
    <div className="absolute bg-white rounded-[10px] item-center flex w-[1182px] h-[80px] left-[146px] top-[299px]">
      <SearchIcon className="w-[25px] text-lineDivide h-[25px] absolute top-[28px] left-[30px]" />
      <input
        type="text"
        placeholder="Search a job"
        className="w-[193px] h-[22px] outline-none absolute top-[30px] left-[75px]"
      />
      <p className="border-[0.8px] border-lineDivide -rotate-90 border-solid absolute w-[54px] top-[39px] left-[554px]"></p>
      <LocationMarkerIcon className="cursor-pointer w-[22.58px] h-[30px] text-lineDivide absolute top-[28px] left-[600px]" />
      <input
        type="text"
        placeholder="Location"
        className="w-[137px] h-[22px] absolute top-[30px] left-[639px] outline-none text-navMenuTxt"
      />
      <p className="w-[121px] h-[47px] bg-searchBtn text-white text-center cursor-pointer absolute top-[17px] left-[1037px] p-[8px] rounded-[10px] text-navMenuTxt">
        Search
      </p>
    </div>
  );
}

export default GuestSearchBar;

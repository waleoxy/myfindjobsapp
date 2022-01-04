import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";

function JobDetail({ job }) {
  const { title, location, description } = job;
  return (
    <div className="w-full rounded h-full shadow-lg">
      <div className="px-6 py-4">
        <div className=" font-bold text-cardSubTitle mb-2">
          <p className="tracking-djTxt text-[#0F4A7B]">{title}</p>
        </div>
        <div className="flex items-center h-10 space-x-1 mb-3">
          <LocationMarkerIcon className="text-lineDivide h-10 w-7" />
          <p className="text-footerSubHead tracking-djTxt font-medium ">
            {location}
          </p>
        </div>
        <button className="w-[250px] h-12 mt-12 bg-[#0F4A7B] rounded-lg text-base">
          Apply Via Find Job
        </button>
      </div>
      <p className="text-ellipse_b w-full border-[1px]"></p>
      <div className="">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default JobDetail;

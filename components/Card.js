import { LocationMarkerIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Store } from "../Store";

function Card({ id, title, salary, location, description }) {
  const { state, dispatch } = useContext(Store);
  const { isDetailJob } = state;
  const [isClicked, setIsClicked] = useState(false);

  const handleJobDetail = async () => {
    setIsClicked(!isClicked);
    const { data } = await axios.get(`/api/jobs/${id}`);
    console.log("d", data);
    dispatch({ type: "SHOW_DETAIL_ON", payload: data });
  };

  return (
    <div
      className={
        isClicked
          ? `bg-postJobColor w-full rounded overflow-hidden shadow-lg`
          : `w-full rounded overflow-hidden shadow-lg`
      }>
      <div className="px-6 py-4">
        <div className="flex justify-between font-bold text-cardSubTitle mb-2">
          <p className="tracking-djTxt text-[#0F4A7B]">{title}</p>
          <p className="tracking-djTxt text-[#0F4A7B]">{salary}</p>
        </div>
        <div className="flex items-center h-10 space-x-1 mb-3">
          <LocationMarkerIcon className="text-lineDivide h-10 w-7" />
          <p className="text-footerSubHead tracking-djTxt font-medium ">
            {location}
          </p>
        </div>

        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div
        onClick={handleJobDetail}
        className="cursor-pointer px-6 pt-4 pb-2 mb-6 ml-96">
        <span
          className={
            !isClicked
              ? `bg-searchBtn rounded-lg px-3 py-2 text-sm font-semibold text-white ml-8`
              : `bg-white rounded-lg px-3 py-2 text-sm font-semibold text-searchBtn ml-8`
          }>
          See More
        </span>
      </div>
    </div>
  );
}
export default Card;

export const getServerSideProps = async (context) => {
  await db.connect();
  const jobList = await Job.findOne({}).lean();
  await db.disConnect();
  return {
    props: { jobs: jobList.map(db.convertDocTObj) },
  };
};

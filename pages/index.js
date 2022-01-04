import Head from "next/head";
import { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import JobDetail from "../components/JobDetail";
import Job from "../models/Job";
import { Store } from "../Store";
import db from "../utils/db";
import DetailJobPg from "./Job/[detailJobPg]";

export default function Home({ jobs }) {
  const { state, dispatch } = useContext(Store);
  const { isDetailJob, detailJob } = state;

  console.log("is", isDetailJob);
  return (
    <div className="bg-[#E5E5E5] h-full w-max relative">
      <HeaderSection />
      <div className="container mt-16">
        <p className="ml-10 mt-14 mb-8">Paragraph</p>
        <div className=" mx-10 px-10 bg-white grid grid-cols-2">
          <div className="flex-col space-y-3">
            {jobs.map((job) => (
              <Card
                key={job._id}
                id={job._id}
                title={job.title}
                salary={job.salary}
                location={job.location}
                description={job.description}
              />
            ))}
          </div>
          <div>{isDetailJob && <DetailJobPg />}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export const getServerSideProps = async () => {
  await db.connect();
  const jobList = await Job.find({}).lean();
  await db.disConnect();
  return {
    props: { jobs: jobList.map(db.convertDocTObj) },
  };
};

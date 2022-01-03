import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import db from "../utils/db";

export default function Home() {
  return (
    <div className="bg-[#E5E5E5] h-full w-max relative">
      <HeaderSection />
      <div className="container mt-16 ">
        <p className="ml-10 mt-14 mb-8">Paragraph</p>
        <div className=" mx-10 px-10 bg-white grid grid-cols-2">
          <div className="flex-col space-y-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>Right sectionjob details</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export const getServerSideProps = async () => {
  await db.connect();
};

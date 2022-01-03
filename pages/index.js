import Head from "next/head";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";

export default function Home() {
  return (
    <div className="bg-[#E5E5E5] h-screen w-max relative">
      <HeaderSection />
      <h1>Job listing webapp</h1>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import React from "react";
import findJobsLogo from "../public/images/findJobsLogo.png";
import socialLinks from "../utils/socialData";

function Footer() {
  return (
    <div className="w-[1440px] h-[266px] bg-[#0F4A7B] absolute top-[1734px] left-0">
      <div className="flex space-x-44 w-[1233px] h-[178px] absolute top-16 left-[200px]">
        <div className="flex flex-col">
          <Image src={findJobsLogo} alt="logo" layout="fixed" />
          <p className="text-navMenuTxt mt-3 text-white">
            copright &copy;{new Date().getFullYear()} FindJobs
          </p>
        </div>
        <div>
          <p className="w-[143px] h-[35px] text-footerSubHead text-white">
            Quick Links
          </p>
          <div></div>
        </div>
        <div>
          <p className="w-[143px] h-[35px] text-footerSubHead text-white">
            Quick Links
          </p>
          <div></div>
        </div>
        <div>
          <p className="w-[143px] h-[35px] ml-6 mb-2 text-footerSubHead text-white">
            Social media
          </p>
          <div className="flex space-x-10 w-[184.3px] h-[50px]">
            {socialLinks.map((socialLink) => {
              return (
                <a href={socialLink.url} key={socialLink.id}>
                  <p className="bg-ellipse_c rounded-full h-9 w-9 flex items-center justify-center">
                    {socialLink.icon}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

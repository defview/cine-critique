import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ContentWrapper from "./ContentWrapper";

const Footer = () => {
  return (
    <footer
      className="bg-[#36454F] py-[50px] px-0 text-gray-200
    relative"
    >
      <ContentWrapper>
        <div className="flex items-center flex-col">
          <ul className="list-none flex items-center justify-center gap-[15px]
          mb-[20px] md:mb-[30px] md:gap-[30px] font-chirp font-semibold">
            <li className="menuFoot md:text-[16px]">Terms Of Use</li>
            <li className="menuFoot md:text-[16px]">Privacy-Policy</li>
            <li className="menuFoot md:text-[16px]">About</li>
            <li className="menuFoot md:text-[16px]">Blog</li>
            <li className="menuFoot md:text-[16px]">FAQ</li>
          </ul>
          <div className="text-[12px] leading-[20px] opacity-25 max-w-[800px]
          mb-[20px] md:text-[14px] md:mb-[30px] font-chirp font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <span className="icon">
              <TwitterIcon />
            </span>
            <span className="icon">
              <GitHubIcon />
            </span>
            <span className="icon">
              <LinkedInIcon />
            </span>
            <span className="icon">
              <PinterestIcon />
            </span>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

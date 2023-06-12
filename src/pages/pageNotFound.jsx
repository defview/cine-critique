import React from "react";
import ContentWrapper from "../components/ContentWrapper"

const PageNotFound = () => {
  return (
    <div className="h-[700px] pt-[200px]">
      <ContentWrapper>
        <div className="text-center font-chirp font-semibold
        text-[#7393B3] flex flex-col">
          <span className="text-[150px] font-bold">404</span>
          <span className="text-[44px]">Page not found!</span>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;

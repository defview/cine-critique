import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="relative mb-[70px]">
      <ContentWrapper>
        <div className="flex items-center justify-between mb-[20px]">
          <span className="text-[24px] text-[#FFD700] font-chirp font-medium">
            Trending
          </span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;

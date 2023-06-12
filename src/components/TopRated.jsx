import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="relative mb-[70px]">
      <ContentWrapper>
        <div className="flex items-center justify-between mb-[20px]">
          <span className="text-[24px] text-[#FFD700] font-chirp font-medium">
            Top Rated
          </span>
          <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
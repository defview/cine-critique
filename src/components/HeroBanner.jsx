import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../components/Img";
import ContentWrapper from "../components/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div
      className="w-full h-[450px] bg-[#081628] flex items-center relative
    md:h-[700px]"
    >
      {!loading && (
        <div
          className="w-full h-full absolute top-0 left-0 opacity-[0.5px] 
        overflow-hidden"
        >
          <span className="w-full h-full">
            <Img
              src={background}
              className="w-full h-full object-cover object-center"
            />
          </span>
        </div>
      )}

      <div
        className="w-full h-full bg-gradient-to-b from-[#04152d]/5
      to-[#081628]/100 absolute bottom-0 left-0"
      ></div>
      <ContentWrapper>
        <div
          className="flex flex-col items-center text-[#FFD700] text-center
        relative max-w-[800px] my-0 mx-auto font-chirp"
        >
          <span className="text-[50px] font-chirp font-bold mb-[10px] md:mb-0 md:text-[90px]">
            Welcome.
          </span>
          <span className="text-[18px] font-medium mb-[40px] md:text-[24px] font-chirp">
            Millions of movies, Tv shows and people to discover. Explore now.
          </span>
          <div className="flex items-center w-full">
            <input
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              type="text"
              placeholder="search for a movie ot tv show..."
              className="w-[calc(100%-100px)] h-[50px] bg-white outline-none
              border-0 rounded-l-[30px] py-0 px-[15px] text-[14px] md:w-[calc(100%-150px)]
              md:h-[60px] md:text-[20px] md:px-[30px] font-chirp text-[#081628] font-semibold"
            />
            <button
              className="w-[100px] h-[50px] bg-gradient-to-r from-blue-700 to-cyan-500 rounded-r-[30px]
            text-[16px] cursor-pointer md:w-[150px] md:h-[60px] md:text-[18px] font-chirp font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

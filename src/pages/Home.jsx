import React from "react";
import HeroBanner from "../components/HeroBanner";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Home;

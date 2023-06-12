import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailsBanner from "../components/Details/DetailsBanner";
import Cast from "../components/Details/Cast";
import VideosSection from "../components/Details/VideoSection";
import Similar from "../components/Details/carousels/Similar";
import Recommendation from "../components/Details/carousels/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;

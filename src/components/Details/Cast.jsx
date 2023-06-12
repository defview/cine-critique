import React from "react";
import { useSelector } from "react-redux";
import avatar from "../../assets/avatar.png";
import ContentWrapper from "../ContentWrapper";
import Img from "../Img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="w-[125px] h-[125px] rounded-[50%] mb-[15px] 
        md:w-[175px] md:h-[175px] md:mb-[25px] skeleton"></div>
        <div className="w-full h-full rounded-[10px] mb-[10px] skeleton"></div>
        <div className="w-[75%] h-[20px] rounded-[10px] my-0 mx-auto skeleton"></div>
      </div>
    );
  };
  return (
    <div className="relative mb-[50px]">
      <ContentWrapper>
        <div className="text-[24px] text-[#FFD700] mb-[25px] font-chirp font-bold">Top Cast</div>
        {!loading ? (
          <div className="flex gap-[20px] overflow-y-hidden -mr-[20px] -ml-[20px]
          py-0 px-[20px] md:m-0 md:p-0">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="text-center text-[#7393B3]">
                  <div className="w-[125px] h-[125px] rounded-[50%] overflow-hidden
                  mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px]">
                    <Img src={imgUrl} className="roundedImg" />
                  </div>
                  <div className="text-[14px] leading-[20px] font-semibold font-chirp
                  md:text-[18px] md:leading-[24px]">{item.name}</div>
                  <div className="text-[14px] leading-[20px] opacity-[0.5]
                  md:text-[16px] md:leading-[24px] font-chirp font-medium">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-[20px] overflow-y-hidden -mr-[20px] -ml-[20px]
          py-0 px-[20px] md:m-0 md:p-0">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;

import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="md:flex hidden flex-wrap gap-[5px] items-end justify-end">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-[#100C08] py-[3px] px-[5px] font-[12px]
          font-chirp rounded-[4px] text-[#7393B3] whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;

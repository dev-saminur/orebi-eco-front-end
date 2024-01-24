import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className="absolute left-0 top-[36%] z-10 !flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] lg:h-16 lg:w-16"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <HiArrowSmLeft className="text-2xl text-white" />
    </span>
  );
}
export default SamplePrevArrow;

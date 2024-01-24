import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className=" absolute right-7  top-[36%] z-10 !flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] md:max-xl:right-0 lg:h-16 lg:w-16"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <HiArrowSmRight className="text-2xl text-white" />
    </span>
  );
}
export default SampleNextArrow;

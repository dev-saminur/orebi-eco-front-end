import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="my-32 ">
        <h2 className="mb-3 font-dmSans text-5xl font-bold capitalize text-titleColor">
          {title ? title : window.location.pathname.split("/")[1]}
        </h2>
        <p className="flex items-center gap-x-1 font-dmSans text-sm font-normal capitalize text-titleGray">
          <Link to="/">Home</Link> <MdKeyboardArrowRight />
          {title ? title : window.location.pathname.split("/")[1]}
        </p>
      </div>
    </>
  );
};

export default Breadcrumb;

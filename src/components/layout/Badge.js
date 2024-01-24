import React from "react";

const Badge = ({ title }) => {
  return (
    <>
      <span className="absolute left-5 top-5 bg-titleColor px-8 py-2.5 font-dmSans text-sm font-normal text-white">
        {title}
      </span>
    </>
  );
};

export default Badge;

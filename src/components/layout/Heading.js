import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <h2 className="font-dmSans text-[39px] font-bold text-titleColor">
        {title}
      </h2>
    </>
  );
};

export default Heading;

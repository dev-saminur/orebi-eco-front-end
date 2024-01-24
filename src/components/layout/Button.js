import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      type="submit"
      className={`bg-titleColor px-[86px] py-4 font-dmSans text-sm font-bold text-white ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;

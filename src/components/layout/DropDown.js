import React from "react";

const DropDown = ({ className, children, dropref, title }) => {
  return (
    <div className={className} ref={dropref}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default DropDown;

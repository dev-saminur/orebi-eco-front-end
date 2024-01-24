import React from "react";
import { Link } from "react-router-dom";

const Listitem = ({ itemname, className, href, children }) => {
  return (
    <li className={className}>
      <Link to={href}>
        {itemname}
        {children}
      </Link>
    </li>
  );
};

export default Listitem;

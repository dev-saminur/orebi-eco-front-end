import React from "react";
import SideBarContent from "./SideBarContent";
import { category, colors, brands, prices } from "./Data/data";
const LeftSidebar = () => {
  return (
    <div>
      <SideBarContent
        dropDown={true}
        droptitle="Shop by Category"
        data={category}
      />

      <SideBarContent
        dropDown={false}
        droptitle="Shop by Color"
        data={colors}
      />

      <SideBarContent dropDown={true} data={brands} droptitle="Shop by Brand" />
      <SideBarContent dropDown={true} data={prices} droptitle="Shop by Price" />
    </div>
  );
};

export default LeftSidebar;

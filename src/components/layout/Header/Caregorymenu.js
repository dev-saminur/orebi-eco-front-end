import React, { useEffect, useRef, useState } from "react";
import DropDown from "../DropDown";
import List from "../List";
import Listitem from "../Listitem";
import { HiBars3BottomLeft } from "react-icons/hi2";
const Caregorymenu = () => {
  const categoryRef = useRef();
  const [categoryDropDownShow, setCategoryDropDownShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }
    });
  }, []);
  return (
    <>
      <div>
        <DropDown className="relative cursor-pointer" dropref={categoryRef}>
          <p className="z-10 mr-2 flex items-center  gap-x-2.5 font-dmSans text-sm font-normal text-titleColor sm:mr-0">
            <HiBars3BottomLeft className="text-xl" />
            <span className="hidden lg:inline-block"> Shop By Category</span>
          </p>
          {categoryDropDownShow && (
            <List className="absolute top-8 z-10 w-[263px] bg-titleColor">
              <Listitem
                className="border-b border-[#2D2D2D] px-5 py-4 font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Accesories"
              />
              <Listitem
                className="border-b border-[#2D2D2D] px-5 py-4 font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Furniture"
              />
              <Listitem
                className="border-b border-[#2D2D2D] px-5 py-4 font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Electronics"
              />
              <Listitem
                className="border-b border-[#2D2D2D] px-5 py-4 font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Clothes"
              />
              <Listitem
                className="border-b border-[#2D2D2D] px-5 py-4 font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Bags"
              />
              <Listitem
                className="px-5 py-4  font-dmSans text-sm font-normal text-[#BEBEBE] duration-300 hover:ml-2.5 hover:font-bold hover:text-white"
                itemname="Home appliances"
              />
            </List>
          )}
        </DropDown>
      </div>
    </>
  );
};

export default Caregorymenu;

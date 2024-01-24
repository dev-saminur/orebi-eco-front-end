import React, { useEffect, useRef, useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

import Flex from "../Flex";
import DropDown from "../DropDown";
import List from "../List";
import Listitem from "../Listitem";
import Cart from "./Cart";

const User = () => {
  const userRef = useRef();
  const [userShoDropDown, setUserShoDropDown] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (userRef.current.contains(e.target)) {
        setUserShoDropDown(true);
      } else {
        setUserShoDropDown(false);
      }
    });
  }, []);
  return (
    <>
      <Flex className="gap-x-10">
        <DropDown className="relative cursor-pointer" dropref={userRef}>
          <div className="flex items-center">
            <FaUserAlt />
            <GoTriangleDown />
          </div>
          {userShoDropDown && (
            <List className="absolute right-0 top-8 w-[200px] border z-10 border-[#F0F0F0] bg-titleColor text-center">
              <Listitem
                className="border-b border-[#F0F0F0] bg-white px-5 py-4 font-dmSans text-sm font-normal text-titleColor duration-300 ease-in  hover:bg-titleColor hover:font-bold hover:text-white"
                itemname="My Account"
              />
              <Listitem
                className="border-b border-[#F0F0F0] bg-white px-5 py-4 font-dmSans text-sm font-normal text-titleColor duration-300 ease-in  hover:bg-titleColor hover:font-bold hover:text-white"
                itemname="Log Out"
              />
            </List>
          )}
        </DropDown>
        <div>
          <Cart />
        </div>
      </Flex>
    </>
  );
};

export default User;

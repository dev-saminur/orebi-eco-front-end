import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { IoSearch } from "react-icons/io5";
import Search from "../Search";
import Caregorymenu from "./Caregorymenu";
import User from "./User";

const Header = () => {
  return (
    <div className="box-border bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="items-center justify-between">
          <Caregorymenu />
          <div className="relative w-auto md:w-[600px]">
            <Search
              placeholder="Search Products"
              className=" w-full py-2 pl-2 pr-6 text-titleGray  outline-titleGray  md:py-4 md:pl-5 md:pr-12"
            />
            <IoSearch className="absolute right-5 top-[50%] translate-y-[-50%]	" />
          </div>
          <User />
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

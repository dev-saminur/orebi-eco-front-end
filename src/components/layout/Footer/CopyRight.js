import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Flex from "../Flex";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <>
      <div className="mt-16 ">
        <Flex className="flex-wrap sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <Flex className="gap-6 ">
              <Link href="/">
                <FaFacebookF className="transition-all duration-100 hover:text-[#3b5998] " />
              </Link>
              <Link href="/">
                <FaLinkedinIn className="transition-all duration-100 hover:text-[#4682b4] " />
              </Link>
              <Link href="/">
                <FiInstagram className="transition-all duration-100 hover:text-[#E1306C] " />
              </Link>
            </Flex>
          </div>
          <div>
            <h3
              className="text-gray font-dmSans  
              text-[13px] font-normal sm:text-sm"
            >
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </h3>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default CopyRight;

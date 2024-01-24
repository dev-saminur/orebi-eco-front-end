import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { SlReload } from "react-icons/sl";

const AditionalInfo = () => {
  return (
    <>
      <div className="border border-solid border-[#F0F0F0] ">
        <Container>
          <Flex className="items-center justify-between py-3 sm:py-5">
            <Flex className="items-center gap-1 sm:gap-x-4">
              <RiNumber2 className="text-sm sm:text-xl" />
              <p className="font-dmSans text-[10px] font-normal text-[#6D6D6D] sm:text-base">
                Two years warranty
              </p>
            </Flex>
            <Flex className="items-center gap-1 sm:gap-x-4">
              <MdLocalShipping className="text-sm sm:text-xl" />
              <p className="font-dmSans text-[10px] font-normal text-[#6D6D6D] sm:text-base">
                Free shipping
              </p>
            </Flex>
            <Flex className="items-center gap-1 sm:gap-x-4">
              <SlReload className="text-sm sm:text-xl" />
              <p className="font-dmSans text-[10px] font-normal text-[#6D6D6D] sm:text-base">
                Return policy in 30 days
              </p>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default AditionalInfo;

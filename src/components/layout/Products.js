import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Products = ({ src, badge }) => {
  return (
    <>
      <div>
        <div className="group relative  overflow-y-hidden">
          <Image className="w-full" imgsrc={src} />
          {badge && <Badge title="New" />}
          <div className="absolute left-0 w-full bg-white px-[30px] py-[26px] duration-100 ease-in group-hover:bottom-0 sm:bottom-[-45%] lg:max-xl:bottom-[-68%]">
            <Flex className="items-center justify-end gap-1 sm:gap-x-4">
              <p className="font-dmSans text-base font-normal text-titleGray hover:font-bold hover:text-titleColor lg:max-xl:text-sm">
                Add to Wish List
              </p>
              <FaHeart className="text-sm sm:text-xl lg:max-xl:text-lg" />
            </Flex>
            <Flex className="items-center justify-end gap-1 py-5 sm:gap-x-4">
              <p className="font-dmSans text-base font-normal text-titleGray hover:font-bold hover:text-titleColor lg:max-xl:text-sm">
                Compare
              </p>
              <TfiReload className="text-sm sm:text-xl lg:max-xl:text-lg" />
            </Flex>
            <Flex className="items-center justify-end gap-1 sm:gap-x-4 ">
              <p className="font-dmSans text-base font-normal text-titleGray hover:font-bold hover:text-titleColor lg:max-xl:text-sm">
                Add to card
              </p>
              <FaShoppingCart className="text-sm sm:text-xl lg:max-xl:text-lg" />
            </Flex>
          </div>
        </div>
        <div className="mt-6">
          <Flex className=" mb-4 items-center  justify-between ">
            <h3 className=" font-dmSans   font-bold text-titleColor sm:text-lg md:text-base xl:text-xl">
              Basic Crew Neck Tee
            </h3>
            <p className="font-dmSans text-base font-normal text-titleColor lg:max-xl:text-sm">
              $44.00
            </p>
          </Flex>
          <p className="mb-5 font-dmSans text-sm font-normal text-titleColor lg:mb-0 lg:text-base">
            Black
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;

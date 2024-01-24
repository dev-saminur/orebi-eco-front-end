import React, { useEffect, useRef, useState } from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import LeftSidebar from "../components/layout/LeftSidebar";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Shop = () => {
  // const itemRef = useRef();
  // const [categoryShow, setCategoryShow] = useState(false);
  const [show, setShow] = useState(true);
  const [showNumber, setShowNumber] = useState(12);
  const handlePaginationChange = (e) => {
    setShowNumber(+e.target.value);
  };

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     if (itemRef.current.contains(e.target)) {
  //       setCategoryShow(true);
  //     } else {
  //       setCategoryShow(false);
  //     }
  //   });
  // }, []);

  return (
    <>
      <Container>
        <Breadcrumb />
        <div className="w-full  gap-x-10 sm:flex">
          {show && (
            <div className="relative w-full bg-[#fcfcfc]  sm:w-1/4 ">
              <div
                onClick={() => setShow(!show)}
                className="absolute right-0 top-[-28px] z-10  block items-end sm:hidden"
              >
                <IoMdCloseCircleOutline className="text-2xl text-titleColor " />
              </div>

              <LeftSidebar />
            </div>
          )}

          <div className="w-full sm:w-3/4 ">
            <div className="flex justify-center  sm:justify-end sm:gap-x-5  lg:gap-x-10">
              <div className="flex items-center">
                {show ? (
                  " "
                ) : (
                  <IoFilterSharp
                    onClick={() => setShow(!show)}
                    className=" block text-xl text-titleColor sm:hidden"
                  />
                )}
              </div>
              <div className="mx-8 mb-5 flex-wrap items-center gap-x-3.5 sm:mx-0 sm:mb-16 sm:flex">
                <span className="mb-4 inline-block font-dmSans text-base font-normal text-titleGray  sm:mb-0">
                  Sort by:
                </span>
                <select
                  id="countries"
                  className="focus:ring-border-titleColor block rounded-lg border  border-[F0F0F0] p-2.5  font-dmSans text-base font-normal text-titleGray  focus:border-titleColor md:w-[239px]   "
                >
                  <option selected>Featured</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="mb-5 flex-wrap  items-center gap-x-3.5 sm:mb-16 sm:flex">
                <span className="mb-4 inline-block font-dmSans text-base font-normal text-titleGray  sm:mb-0">
                  Short:
                </span>
                <select
                  id="countries"
                  onChange={handlePaginationChange}
                  className="focus:ring-border-titleColor block rounded-lg border  border-[F0F0F0] p-2.5  font-dmSans text-base font-normal text-titleGray  focus:border-titleColor md:w-[139px]   "
                >
                  <option selected value="12">
                    12
                  </option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>

            <Pagination itemsPerPage={showNumber} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;

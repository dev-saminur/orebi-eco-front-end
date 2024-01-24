import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./Products";
import Flex from "./Flex";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 98, 99, 100,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="mb-14 md:w-[48%] lg:w-[32%]">
            <Products src="assets/p1.png" badge={false} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <div className=" mt-12 items-center   md:flex md:flex-wrap md:justify-between">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          pageLinkClassName="page-link  "
          previousClassName="hidden  "
          nextClassName="hidden  "
          breakClassName="page-item mt-[19px]"
          breakLinkClassName="page-link "
          containerClassName="flex flex-wrap gap-x-3.5 "
          pageClassName="page-item block py-2.5 px-4 md:my-0 my-3 border border-solid border-[#F0F0F0] font-dmSans font-normal text-sm text-titleColor"
          activeClassName="active block py-2.5 px-4 border border-solid border-[#F0F0F0] font-dmSans font-normal text-sm bg-titleColor text-white "
        />
        <p className="font-dmSans text-sm font-normal text-titleColor md:mt-5  lg:mt-0">
          Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
          {items.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;

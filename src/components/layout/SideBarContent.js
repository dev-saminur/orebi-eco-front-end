import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import LeftSideBarItem from "./LeftSideBarItem";

const SideBarContent = ({ dropDown, droptitle, data }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(dropDown);

 
  return (
    <>
      <div>
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className="mb-9  flex cursor-pointer items-center justify-between "
          >
            <h3 className="font-dmSans text-xl font-bold text-titleColor">
              {droptitle}
            </h3>
            <FaSortDown />
          </div>
        ) : (
          <h3 className="mb-9 font-dmSans text-xl font-bold text-titleColor">
            {droptitle}
          </h3>
        )}
      </div>
      {show && (
        <>
          <div className="mb-14">
            {/* {data.map((item, index) => (
              <LeftSideBarItem
                subDropDown={item.subcategory ? true : false}
                title={item.name}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                      {sitem.name}
                    </p>
                  ))}
              </LeftSideBarItem>
            ))} */}
            {data.map((item, index) =>
              item.subcategory ? (
                <LeftSideBarItem
                  subDropDown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                        {sitem.name}
                      </p>
                    ))}
                </LeftSideBarItem>
              ) : (
                <LeftSideBarItem
                  subDropDown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                        {sitem.name}
                      </p>
                    ))}
                </LeftSideBarItem>
              ),
            )}
          </div>
        </>
      )}
      {!drop && (
        <>
          <div className="mb-14">
            {/* {data.map((item, index) => (
              <LeftSideBarItem
                subDropDown={item.subcategory ? true : false}
                color={item.name}
                title={`Color ${index + 1}`}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                      {sitem.name}
                    </p>
                  ))}
              </LeftSideBarItem>
            ))} */}
            {data.map((item, index) =>
              item.subcategory ? (
                <LeftSideBarItem
                  subDropDown={item.subcategory ? true : false}
                  color={item.code}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                        {sitem.name}
                      </p>
                    ))}
                </LeftSideBarItem>
              ) : (
                <LeftSideBarItem
                  subDropDown={item.subcategory ? true : false}
                  color={item.code}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <p className="border-[#F0F0F0)] ml-4 border-b border-solid  py-5 font-dmSans text-base font-normal text-titleGray">
                        {sitem.name}
                      </p>
                    ))}
                </LeftSideBarItem>
              ),
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SideBarContent;

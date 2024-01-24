import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const LeftSideBarItem = (props) => {
  const [drop, setDrop] = useState(props.subDropDown);
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className=" flex cursor-pointer items-center justify-between border-b  border-solid py-5 font-dmSans text-xl font-bold text-titleColor"
          >
            <h3 className=" font-dmSans text-base  font-normal text-titleGray">
              {props.color && (
                <span
                  className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
                  style={{ background: props.color }}
                ></span>
              )}

              {props.title}
            </h3>
            <FiPlus />
          </div>
        ) : (
          <div
            onClick={() => setShow(!show)}
            className=" flex cursor-pointer items-center justify-between border-b  border-solid py-5 font-dmSans text-xl font-bold text-titleColor"
          >
            <h3 className=" font-dmSans text-base  font-normal text-titleGray">
              {props.color && (
                <span
                  className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
                  style={{ background: props.color }}
                ></span>
              )}

              {props.title}
            </h3>
          </div>
        )}

        {show && <div>{props.children}</div>}
      </div>
    </>
  );
};

export default LeftSideBarItem;

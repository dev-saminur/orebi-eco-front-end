import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { FaShoppingCart } from "react-icons/fa";
import DropDown from "../DropDown";
import Flex from "../Flex";
import Image from "../Image";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartRef = useRef();
  const [cartShoDropDown, setCartShoDropDown] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cartRef.current.contains(e.target)) {
        setCartShoDropDown(true);
      } else {
        setCartShoDropDown(false);
      }
    });
  }, []);
  return (
    <>
      <DropDown className="relative " dropref={cartRef}>
        <div className="flex cursor-pointer items-center">
          <FaShoppingCart />
        </div>
        {cartShoDropDown && (
          <div className="absolute right-0 top-8 z-10 w-[360px] border border-[#F0F0F0] bg-white">
            <div className="bg-[#F5F5F3] p-5">
              <Flex className="items-center justify-between">
                <div className="h-20 w-20 bg-black">
                  <Image
                    className="h-full w-full object-cover"
                    imgsrc="/assets/cartmage.png"
                  />
                </div>
                <div>
                  <h3 className="font-dmSans text-sm font-bold text-titleColor ">
                    Black Smart Watch
                  </h3>
                  <h3 className="font-dmSans text-sm font-bold text-titleColor ">
                    $44.00
                  </h3>
                </div>

                <IoClose className="cursor-pointer text-xl" />
              </Flex>
            </div>
            <div className="bg-white p-5">
              <h4 className="mb-3 font-dmSans text-base font-normal text-titleColor ">
                Subtotal: <span className="font-bold">$44.00</span>
              </h4>
              <Link
                to="#"
                className="mr-5 inline-block border border-solid border-titleColor px-10 py-4 text-sm font-bold text-titleColor"
              >
                View Cart
              </Link>
              <Link
                to="#"
                className="inline-block border border-solid border-titleColor bg-titleColor px-10 py-4 text-sm font-bold text-white"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </DropDown>
    </>
  );
};

export default Cart;

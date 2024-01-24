import React from "react";
import Image from "./Image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import List from "./List";
import Listitem from "./Listitem";
import Container from "./Container";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(true);
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
  return (
    <>
      <nav>
        <Container>
          <div className="px-4 py-8 lg:flex lg:px-0">
            <div className="lg:w-3/12">
              <Link to="/">
                <Image imgsrc="assets/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="lg:w-9/12 ">
              <HiBars3BottomRight
                onClick={() => setShow(!show)}
                className="absolute right-4 top-4  block text-xl lg:hidden"
              />
              {show && (
                <List className="mr-auto mt-6 lg:mt-0 lg:flex lg:justify-end lg:gap-x-10 ">
                  <Listitem
                    className="cursor-pointer py-1 font-dmSans text-sm font-normal text-titleGray hover:font-bold hover:text-titleColor lg:py-0"
                    itemname="Home"
                  />
                  <Listitem
                    className="cursor-pointer py-1 font-dmSans text-sm font-normal text-titleGray hover:font-bold hover:text-titleColor lg:py-0"
                    href="product"
                    itemname="Shop"
                  />
                  <Listitem
                    className="cursor-pointer py-1 font-dmSans text-sm font-normal text-titleGray hover:font-bold hover:text-titleColor lg:py-0"
                    itemname="About"
                    href="about"
                  />
                  <Listitem
                    className="cursor-pointer py-1 font-dmSans text-sm font-normal text-titleGray hover:font-bold hover:text-titleColor lg:py-0"
                    itemname="Contacts"
                    href="contacts"
                  />
                  <Listitem
                    className="cursor-pointer py-1 font-dmSans text-sm font-normal text-titleGray hover:font-bold hover:text-titleColor lg:py-0"
                    itemname="Jurnal"
                    href="#"
                  />
                </List>
              )}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;

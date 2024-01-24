import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./Image";

const Advertise = () => {
  return (
    <div className=" mt-6 md:mt-20 xl:mt-36">
      <Container>
        <Flex className="items-center gap-3 md:gap-x-10">
          <div className="max-w-2/4 block">
            <Link to="#">
              <Image imgsrc="assets/ad1.jpg" />
            </Link>
          </div>
          <div className=" max-w-2/4 block">
            <Link to="#">
              <Image imgsrc="assets/ad2.jpg" />
            </Link>
            <Link to="#">
              <Image imgsrc="assets/ad3.jpg" className="mt-3  lg:mt-10" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;

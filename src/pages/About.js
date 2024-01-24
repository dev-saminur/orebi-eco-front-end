import React from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import { Link } from "react-router-dom";
import Image from "../components/layout/Image";
const About = () => {
  return (
    <>
      <Container>
        <div>
          <Breadcrumb />
          <div className="mb-14 grid grid-cols-2 gap-x-10 md:mb-32">
            <Link to="#">
              <Image imgsrc="assets/aboutimg.png" className="w-full" />
            </Link>
            <Link to="#">
              <Image imgsrc="assets/aboutimg1.png" className="w-full" />
            </Link>
          </div>
          <p className="font-dmSans text-lg font-normal text-titleColor sm:text-[22px]  md:leading-[52px]  lg:text-[39px] xl:pr-[145px]">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-x-10   sm:mt-[118px] sm:grid-cols-2 md:grid-cols-3 ">
            <div className="mb-7 sm:mb-0">
              <h4 className="mb-4  font-dmSans text-[25px] font-bold text-titleColor sm:mb-0 lg:leading-[36px] ">
                Our Vision
              </h4>
              <p className="font-dmSans text-base font-normal text-titleGray lg:leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="mb-7 sm:mb-0">
              <h4 className="mb-4  font-dmSans  text-[25px] font-bold text-titleColor sm:mb-0 lg:leading-[36px] ">
                Our Story
              </h4>
              <p className="font-dmSans text-base font-normal text-titleGray lg:leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="sm:mt-5 md:mt-0">
              <h4 className="mb-4  font-dmSans text-[25px] font-bold text-titleColor md:mb-0 lg:leading-[36px] ">
                Our Brands
              </h4>
              <p className="font-dmSans text-base font-normal text-titleGray lg:leading-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;

import React, { Component, useState } from "react";
import Slider from "react-slick";
import Image from "./Image";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "9%",

          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "2px white solid",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <div className="mb-8">
        <Slider {...settings}>
          <div>
            <Image imgsrc="assets/banner.jpg" alt="Banner" />
          </div>
          <div>
            <Image imgsrc="assets/banner.jpg" alt="Banner" />
          </div>
          <div>
            <Image imgsrc="assets/banner.jpg" alt="Banner" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;

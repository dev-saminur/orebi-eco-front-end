import React from "react";
import Container from "./Container";
import Products from "./Products";
import Slider from "react-slick";
import SampleNextArrow from "./Arrow/NextArrow";
import SamplePrevArrow from "./Arrow/PrevArrow";
import Heading from "./Heading";

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    spaceBetween: "50px",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-14 xl:mt-32">
        <Container>
          <Heading title="New Arrivals" />
          <div className="mt-10">
            <Slider {...settings}>
              <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                <Products src="assets/p1.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p2.png" badge={true} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p3.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p4.png" badge={true} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p1.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p2.png" badge={true} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p3.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:w-[300px] xl:max-w-[370px]">
                <Products src="assets/p4.png" badge={true} />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;

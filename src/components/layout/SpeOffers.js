import React from "react";
import Container from "./Container";
import Products from "./Products";

import Heading from "./Heading";

const SpeOffers = () => {
  return (
    <>
      <div className="mt-8 xl:mt-32">
        <Container>
          <Heading title="Special Offers" />
          <div className="mt-10">
            <div className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
              <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                <Products src="assets/p1.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                <Products src="assets/p2.png" badge={true} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                <Products src="assets/p3.png" badge={false} />
              </div>
              <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                <Products src="assets/p4.png" badge={true} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpeOffers;

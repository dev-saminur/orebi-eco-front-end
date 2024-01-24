import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";
const MiddleAdvertise = () => {
  return (
    <>
      <Container>
        <div className="mt-14 xl:mt-32">
          <Link to="#">
            <Image
              className="w-full overflow-x-hidden"
              imgsrc="assets/midadd.png"
            />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default MiddleAdvertise;

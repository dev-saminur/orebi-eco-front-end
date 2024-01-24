import React from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Button from "../components/layout/Button";

const Contact = () => {
  return (
    <>
      <Container>
        <Breadcrumb />
        <div>
          <h2 className="mb-10 font-dmSans text-[39px] font-bold text-titleColor">
            Fill up a Form
          </h2>
          <div className="w-4/5 lg:w-3/5 xl:w-2/4">
            <form>
              <div className="mb-6">
                <label className="mb-2.5 block font-dmSans text-base font-bold text-titleColor">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="w-full border-b border-solid border-[#F0F0F0] pb-4 font-dmSans text-sm font-normal text-titleGray outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2.5 block font-dmSans text-base font-bold text-titleColor">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full border-b border-solid border-[#F0F0F0] pb-4 font-dmSans text-sm font-normal text-titleGray outline-none"
                />
              </div>
              <div className="mb-8">
                <label className="mb-2.5 block font-dmSans text-base font-bold text-titleColor">
                  Email
                </label>
                <textarea
                  type="texttextarea"
                  placeholder="Your email here"
                  className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-20 font-dmSans text-sm font-normal text-titleGray outline-none"
                />
              </div>
              <Button title="Post" />
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;

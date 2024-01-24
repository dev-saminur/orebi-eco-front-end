import React from "react";
import Container from "../Container";
import Listitem from "../Listitem";
import List from "../List";
import CopyRight from "./CopyRight";
import { HelpData, MenuData, ShopData } from "./FooterData";
import { Link } from "react-router-dom";
import Image from "../Image";
const Footer = () => {
  return (
    <>
      <div className="mt-6 bg-[#F5F5F3] py-14 xl:mt-32">
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-start-1 col-end-4  md:col-start-1 md:col-end-2 ">
              <h3 className="mb-4 font-dmSans text-base font-bold uppercase text-titleColor">
                Menu
              </h3>
              <List>
                {MenuData.map((item, i) => (
                  <Link>
                    <Listitem
                      key={i}
                      links={item.link}
                      className="mb-3 font-dmSans text-sm text-titleColor"
                    >
                      {item.title}
                    </Listitem>
                  </Link>
                ))}
              </List>
            </div>
            <div className="col-start-4 col-end-8 md:col-start-3 md:col-end-5 xl:col-start-2 xl:col-end-3 ">
              <h3 className="mb-4 font-dmSans text-base font-bold uppercase text-titleColor">
                Shop
              </h3>
              <List>
                {ShopData.map((item, i) => (
                  <Link>
                    <Listitem
                      key={i}
                      links={item.link}
                      className="mb-3 font-dmSans text-sm text-titleColor"
                    >
                      {item.title}
                    </Listitem>
                  </Link>
                ))}
              </List>
            </div>
            <div className="col-start-8 col-end-[-1] md:col-start-5 md:col-end-7 xl:col-start-3 xl:col-end-4  ">
              <h3 className="mb-4 font-dmSans text-base font-bold uppercase text-titleColor">
                Help
              </h3>
              <List>
                {HelpData.map((item, i) => (
                  <Link>
                    <Listitem
                      key={i}
                      links={item.link}
                      className="mb-3 font-dmSans text-sm text-titleColor"
                    >
                      {item.title}
                    </Listitem>
                  </Link>
                ))}
              </List>
            </div>

            <div className="col-start-1 col-end-8 mt-14 md:col-start-8  md:col-end-11 md:mt-0 xl:col-start-7 xl:col-end-10 ">
              <h3 className="mb-4  font-dmSans text-base font-bold text-titleColor ">
                (052) 611-5711
              </h3>
              <h3 className="mb-4 font-dmSans text-base font-bold text-titleColor">
                company@domain.com
              </h3>
              <span className="text-gray font-dmSans text-sm font-normal">
                575 Crescent Ave. Quakertown, PA 18951
              </span>
            </div>
            <div className="col-start-9 col-end-[-1] mt-14 md:col-start-11  md:col-end-[-1] md:mt-0 xl:col-start-10 xl:col-end-[-1] ">
              <Link>
                <Image
                  className="scale-1 md:scale-90 lg:scale-100"
                  imgsrc="assets/flogo.png"
                />
              </Link>
            </div>
          </div>
          <CopyRight />
        </Container>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Button from "../components/layout/Button";
import { useFormik } from "formik";
import { signIn } from "../components/Validation/validation";
const Login = () => {
  let initialvalues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    onSubmit: () => {
      console.log("aci");
    },
    validationSchema: signIn,
  });

  return (
    <>
      <Container>
        <Breadcrumb />
        <div>
          <div className="border-b border-solid border-[#F0F0F0]">
            <p className="w-full pb-16 font-dmSans  text-base font-normal leading-[30px] text-titleGray sm:w-[87%] md:w-2/5 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
          <div className="mt-14">
            <h2 className="mb-10 font-dmSans text-[39px] font-bold text-titleColor">
              Returning Customer
            </h2>
            <div className="border-b border-solid border-[#F0F0F0] pb-16">
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-10 grid grid-cols-2 gap-16">
                  <div className="mb-6 ">
                    <label className="mb-2.5 block font-dmSans text-base font-bold text-titleColor">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="company@domain.com"
                      className="w-full border-b border-solid border-[#F0F0F0] pb-4 font-dmSans text-sm font-normal text-titleGray outline-none"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <p className="font-primaryFont mt-4 text-base text-red-400">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-6 ">
                    <label className="mb-2.5 block font-dmSans text-base font-bold text-titleColor">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="************"
                      className="w-full border-b border-solid border-[#F0F0F0] pb-4 font-dmSans text-sm font-normal text-titleGray outline-none"
                    />

                    {formik.errors.password && formik.touched.password ? (
                      <p className="font-primaryFont mt-4 text-base text-red-400">
                        {formik.errors.password}
                      </p>
                    ) : null}
                  </div>
                </div>
                <Button title="Log in" />
              </form>
            </div>
            <div className="mt-14">
              <h2 className="mb-10 font-dmSans text-[39px] font-bold text-titleColor">
                Returning Customer
              </h2>
              <p className=" w-2/5 font-dmSans text-base font-normal leading-[30px] text-titleGray ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
              <Button className="mt-12" title="Continue" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

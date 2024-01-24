import React, { useState } from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Button from "../components/layout/Button";
import { useFormik } from "formik";
import { signUp } from "../components/Validation/validation";

const SignUp = () => {
  // const [loading, setLoading] = useState(false)
  // const [success, setSuccess] = useState("")
  const [error, setError] = useState("");
  let initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    state: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: signUp,
    onSubmit: (a) => {
      console.log("aci", a);
    },
  });
  console.log(formik);
  const tempyrs = new Date().getFullYear();
  const years = Array.from(new Array(108), (val, index) => tempyrs - index);
  const months = Array.from(new Array(12), (val, index) => index + 1);
  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const getDates = Array.from(new Array(days()), (val, index) => index + 1);
  return (
    <>
      <Container>
        <Breadcrumb title="Sign Up" />
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
              Your Personal Details
            </h2>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mt-10 grid grid-cols-2 gap-16">
                  <div>
                    <label className="font-primaryFont text-base font-bold leading-6 text-black">
                      First Name
                    </label>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.firstName}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      placeholder="First Name"
                    />

                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Email Address
                    </label>
                    {formik.errors.email && formik.touched.email ? (
                      <p className="font-primaryFont mt-4 text-base text-red-400">
                        {formik.errors.email}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="saminur9125@gmail.com"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Address
                    </label>
                    {formik.touched.address && formik.errors.address ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.address}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      placeholder="Address"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Post Code
                    </label>
                    {formik.touched.postCode && formik.errors.postCode ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.postCode}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="postCode"
                      onChange={formik.handleChange}
                      value={formik.values.postCode}
                      placeholder="Post Code"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      State
                    </label>
                    {formik.touched.state && formik.errors.state ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.state}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="state"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Last Name
                    </label>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.lastName}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      placeholder="Last Name"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Telephone
                    </label>
                    {formik.touched.telephone && formik.errors.telephone ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.telephone}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="telephone"
                      onChange={formik.handleChange}
                      value={formik.values.telephone}
                      placeholder="Your mobile number"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      City
                    </label>
                    {formik.touched.city && formik.errors.city ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.city}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="city"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      placeholder="City"
                    />
                    <label className="font-primaryFont text-base font-bold leading-6  text-black">
                      Country
                    </label>
                    {formik.touched.country && formik.errors.country ? (
                      <p className="pt-2 font-dmSans text-red-500">
                        {formik.errors.country}
                      </p>
                    ) : null}
                    <input
                      className="border-borderColor text-gray font-primaryFont mb-6 mt-3 block  w-full border-b pb-4 text-sm focus:outline-none"
                      type="text"
                      name="country"
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      placeholder="Country"
                    />
                    <div>
                      <label className="font-primaryFont text-base font-bold leading-6  text-black">
                        Date Of Birth
                      </label>

                      <div className="mt-3 flex gap-4">
                        <select
                          onChange={formik.handleChange}
                          name="bYear"
                          value={formik.values.bYear}
                          className="w-[25%]"
                        >
                          {years.map((year, i) => (
                            <option key={i} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        <select
                          onChange={formik.handleChange}
                          name="bMonth"
                          value={formik.values.bMonth}
                          className="w-[25%]"
                        >
                          {months.map((month, i) => (
                            <option key={i} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <select
                          onChange={formik.handleChange}
                          name="bDay"
                          value={formik.values.bDay}
                          className="w-[25%]"
                        >
                          {getDates.map((date, i) => (
                            <option key={i} value={date}>
                              {date}
                            </option>
                          ))}
                        </select>
                        {error && (
                          <p className="font-primaryFont mt-4 text-base text-red-500">
                            {error}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="mt-12" title="Sign UP" />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;

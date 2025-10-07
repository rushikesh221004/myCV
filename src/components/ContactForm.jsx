import React from "react";
import Getintouch from "./Getintouch";

const ContactForm = () => {
  return (
    <div className="w-full px-2">
      <div className="w-full">
        <div className="flex w-full items-center">
          <div className="w-full flex flex-col gap-8">
            <input
              placeholder="Name"
              type="text"
              className="border-b-[1px] w-full text-[#202942] font-semibold border-gray-300 placeholder:font-semibold pl-3 pb-3 placeholder:text-[#202942] py-1 transition-colors focus:outline-none peer bg-inherit"
            />

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 lg:justify-between lg:items-center">
              <input
                placeholder="Email*"
                type="email"
                className="border-b-[1px] w-full lg:w-[48%] text-[#202942] font-semibold border-gray-300 placeholder:font-semibold pl-3 pb-3 placeholder:text-[#202942] py-1 transition-colors focus:outline-none peer bg-inherit"
              />
              <input
                placeholder="Phone"
                type="number"
                className="border-b-[1px] w-full lg:w-[48%] text-[#202942] font-semibold border-gray-300 placeholder:font-semibold pl-3 pb-3 placeholder:text-[#202942] py-1 transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <textarea
              placeholder="Tell Us About Your Project*"
              rows={8}
              className="border-b-[1px] w-full text-[#202942] font-semibold border-gray-300 placeholder:font-semibold pl-3 pb-3 placeholder:text-[#202942] py-1 transition-colors focus:outline-none peer bg-inherit"
            ></textarea>
            <Getintouch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

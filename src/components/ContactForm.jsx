import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex w-full items-center">
          <div className="relative w-full">
            <input
              id="username"
              name="username"
              type="text"
              className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-gray-300 transition-colors focus:outline-none peer bg-inherit"
            />
            <label
              for="username"
              className="absolute text-[#202942] text-lg font-semibold left-4 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-[#202942]"
            >
              Name
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

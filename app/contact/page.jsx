import ContactForm from "../components/contact";

import React from "react";

const page = () => {
  return (
    <div
      className=" flex items-center justify-center pt-40 sm:pt-46 md:pt-44"
      style={{ backgroundColor: "black" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-slate-300">Get in touch with our team</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;

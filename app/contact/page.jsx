import ContactForm from "../components/contact";

import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0b0f17" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-300">Get in touch with our team</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default page;

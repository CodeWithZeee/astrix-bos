"use client";

import { use, useState } from "react";
import { submitForm } from "../../lib/actions/form";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const handleSend = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      setIsLoading(true);
      const data = await submitForm({
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        message: formData.message,
      });

      toast.success("Form submitted successfully!");
      console.log(data);

      router.push("/"); // Redirect to home page
      setIsLoading(false);
    } catch (error) {
      toast.error("Error submitting form. [SERVER]");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className=" flex"
      style={{
        // background: " linear-gradient(to right, #green 0%, #green 100%)",
      }}
    >
      <div
        className="flex-none max-w-[700px] mx-auto p-2.5"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="relative bg-[#02521d] rounded-[15px] shadow-lg">
          {/* Screen shadow effect */}
          <div
            className="absolute top-0 left-5 right-5 bottom-0 rounded-[15px] -z-10"
            style={{ boxShadow: "0 20px 40px rgba(0, 0, 0, .4)" }}
          ></div>

          {/* Screen header */}
          <div className="flex items-center px-5 py-2.5 bg-[#0c6f0e] rounded-t-[15px]">
            <div className="flex mr-auto">
              <div className="w-2 h-2 mr-1 rounded-full bg-[#ed1c6f]"></div>
              <div className="w-2 h-2 mr-1 rounded-full bg-[#e8e925]"></div>
              <div className="w-2 h-2 mr-1 rounded-full bg-[#74c54f]"></div>
            </div>
            <div className="flex">
              <div className="w-1 h-1 ml-0.5 rounded-full bg-[#999]"></div>
              <div className="w-1 h-1 ml-0.5 rounded-full bg-[#999]"></div>
              <div className="w-1 h-1 ml-0.5 rounded-full bg-[#999]"></div>
            </div>
          </div>

          {/* Screen body */}
          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="flex-1 p-12 flex flex-col">
              <div className="relative">
                <div className="flex flex-col md:flex-row text-[#25c61a] text-[26px] font-bold tracking-[1.4px]">
                  <span>CONTACT</span>
                  <span className="md:ml-3">US</span>
                </div>
                <div
                  className="hidden md:block absolute left-0 w-6 h-1 bg-[#000000]"
                  style={{ bottom: "-10px" }}
                ></div>
              </div>
              <div className="mt-auto text-[8px] text-[#888] font-bold tracking-[1.4px] mb-8 md:mb-0">
                CONTACT INFO : (313) 398-6372
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex-1 p-12 pt-0 md:pt-12">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="NAME"
                    className="w-full py-2.5 bg-transparent border-none border-b border-[#666] text-[#ddd] text-[14px] font-bold tracking-[1.4px] uppercase outline-none transition-colors duration-200 placeholder:text-[#666] focus:border-[#ddd]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="EMAIL"
                    className="w-full py-2.5 bg-transparent border-none border-b border-[#666] text-[#ddd] text-[14px] font-bold tracking-[1.4px] uppercase outline-none transition-colors duration-200 placeholder:text-[#666] focus:border-[#ddd]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="CONTACT NO"
                    className="w-full py-2.5 bg-transparent border-none border-b border-[#666] text-[#ddd] text-[14px] font-bold tracking-[1.4px] uppercase outline-none transition-colors duration-200 placeholder:text-[#666] focus:border-[#ddd]"
                  />
                </div>
                <div className="mt-10">
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="MESSAGE"
                    className="w-full py-2.5 bg-transparent border-none border-b border-[#666] text-[#ddd] text-[14px] font-bold tracking-[1.4px] uppercase outline-none transition-colors duration-200 placeholder:text-[#666] focus:border-[#ddd]"
                  />
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  {/* <button
                    onClick={handleCancel}
                    className="bg-transparent border-none text-green-400 text-[14px] font-bold tracking-[1.4px] cursor-pointer outline-none hover:text-[#b9134f] transition-colors"
                  >
                    CANCEL
                  </button> */}
                  <button
                    disabled={isLoading}
                    onClick={handleSend}
                    className="bg-transparent border-none text-green-400 text-[14px] font-bold tracking-[1.4px] cursor-pointer outline-none hover:text-[#b9134f] transition-colors"
                  >
                    {isLoading ? <Loader2 className="animate-spin" /> : "SEND"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}
        {/* <div className="flex justify-center items-center mt-5 text-[#ffa4bd] text-[16px] font-normal">
          inspired by
          <a
            href="https://dribbble.com/shots/2666271-Contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white font-bold no-underline ml-1"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 200 200"
            >
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  strokeWidth="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  strokeWidth="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  strokeWidth="20"
                ></path>
              </g>
            </svg>
            Gururaj
          </a>
        </div> */}
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Condensed:wght@400&display=swap");

        body {
          font-size: 12px;
        }

        body,
        button,
        input {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .credits {
          font-family: "Roboto Condensed", sans-serif;
        }
      `}</style>
    </div>
  );
}

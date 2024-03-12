"use client";

import service from "@/service/client";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

  const validEmail = emailRegex.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(true);
      setErrMsg("Please enter your email address.");
    } else if (validEmail) {
      setError(false);
      const response = await service.contactForm(email);
      if (response.success) {
        console.log(response.message);
      }
      setEmail("");
    } else {
      setError(true);
      setErrMsg("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto pb-10 w-full">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full rounded-full pl-6 py-4 text-black border-none outline-none hover:shadow-[#B026FF] shadow-md"
            />
            <div className="absolute right-1.5 top-[50%] -translate-y-[50%] bg-gradient-to-r from-[#B026FF] to-[#04FDA3] h-[80%] px-4 rounded-full text-white shadow-2xl">
              <div className="flex justify-center items-center h-full">
                <button
                  type="submit"
                  className="text-sm md:text-base lg:text-xl cursor-pointer"
                >
                  <h4>Subscribe</h4>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {error && <p className="text-red-500 pl-4 py-2">{errMsg}</p>}
    </div>
  );
};

export default ContactForm;

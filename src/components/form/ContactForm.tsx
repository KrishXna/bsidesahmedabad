"use client";

import React, { useState } from "react";
import service from "@/service/client";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

  const validEmail = emailRegex.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccessMessage("");

    if (!email.trim()) {
      setError(true);
      setErrMsg("Please enter your email address.");
      setLoading(false);
    } else if (validEmail) {
      try {
        const response = await service.contactForm({
          email,
        });
        if (response.success) {
          setEmail("");
          setSuccessMessage("Email Submitted successfully");
          setTimeout(() => {
            setSuccessMessage(" ");
          }, 1000);
        }
      } catch (error) {
        setError(true);
        setErrMsg("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      setError(true);
      setErrMsg("Please enter a valid email address.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto pb-10 w-full">
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className={`w-full rounded-full pl-6 py-4 text-black border-none outline-none hover:shadow-[#B026FF] shadow-md ${
                error ? "border-red-500" : ""
              }`}
            />
            <div className="absolute right-1.5 top-[50%] -translate-y-[50%] bg-gradient-to-r from-[#B026FF] to-[#04FDA3] h-[80%] px-4 rounded-full text-white shadow-2xl">
              <div className="flex justify-center items-center h-full">
                <button
                  type="submit"
                  className="text-sm md:text-base lg:text-xl cursor-pointer"
                  disabled={loading}
                >
                  <h4>{loading ? "Loading..." : "Subscribe"}</h4>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {error && <p className="text-red-500 pl-4 py-2 relative">{errMsg}</p>}
      {successMessage && (
        <p className="text-green-500 pl-4 py-2 relative">{successMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;

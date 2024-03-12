"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Container } from "@/components/Container";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/Icons/index";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full bg-slate-900 relative flex flex-col items-center justify-center antialiased">
      <Container>
        <div className="flex flex-wrap relative z-[1] gap-y-8">
          <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center">
            <Logo width={400} />
            <div className="w-full text-center flex gap-x-6 justify-center mt-4">
              <a
                href="https://www.facebook.com/bsidesahmedabad/"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/bsidesahmedabad/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/bsidesahmedabad" target="_blank">
                <TwitterIcon className="mt-1" />
              </a>
              <a
                href="https://www.linkedin.com/company/bsides-ahmedabad/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center text-white">
            <div className="relative">
              <div className="uppercase mb-4">
                <p className="mb-4">got questions?</p>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl">
                  <span className="text-[#36F097]">contact</span> us
                </h3>
              </div>
              <a href="mailto:info@bsidesahmedabad.in">
                info@bsidesahmedabad.in
              </a>
            </div>
          </div>
        </div>
      </Container>
      <BackgroundBeams />
    </div>
  );
}

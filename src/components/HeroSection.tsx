import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Logo from "@/assets/primary-logo.png";
import InputBox from "./InputBox";

export default function HeroSection() {
  return (
    <div className="">
      <div className="absolute inset-x-0 top-8 pl-5 z-50">
        <div className="w-[120px] sm:w-[160px]">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="flex flex-row flex-wrap justify-center">
            <h2
              className={cn(
                "uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] via-[#04FDA3] to-[#B026FF] sm:mb-6"
              )}
            >
              <span>coming</span>
              &nbsp;soon
            </h2>
          </div>
          <InputBox />
        </div>
      </div>
    </div>
  );
}

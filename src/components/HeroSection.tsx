import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import InputBox from "./InputBox";
import Container from "./Container";
import Link from "next/link";
import { Logo } from "@/components/Icons/index";
import ContactForm from "./form/ContactForm";
// import Logo from "@/assets/primary-logo.png";

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-x-0 top-8 z-50">
        <Container fluid className="xl:pl-8 relative">
          <Link href="/">
            <Logo />
          </Link>
        </Container>
      </div>
      <div
        className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center"
        style={
          {
            // backgroundImage: `url(${Logo.src})`,
          }
        }
      >
        <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <Container className="space-y-6">
          <div className="relative mx-auto">
            <p className="text-white font-bold text-2xl md:text-5xl text-center !leading-tight">
              India&apos;s most loving cyber security conference BSides
              Ahmedabad 0x05
            </p>
          </div>
          <InputBox />
          <ContactForm />
          <div className="relative bg-black p-4 rounded-xl">
            <p className="text-white font-montserrat font-bold text-xl md:text-3xl text-center">
              Mean while checkout our keynotes talk on&nbsp;
              <a
                href="https://www.youtube.com/@BSidesAhmedabad"
                target="_blank"
                className="underline hover:cursor-pointer"
              >
                Youtube
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

// India's most loving cyber security confrence bsides ahmedabad 0x05

// bottom;
// mean while checkout our keynotes talk on youtube <link >

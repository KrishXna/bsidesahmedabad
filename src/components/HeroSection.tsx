import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
// import { cn } from "@/utils/cn";
import ComingSoon from "./ComingSoon";
import Container from "./Container";
import Link from "next/link";
import { Logo } from "@/components/Icons/index";
import ContactForm from "./form/ContactForm";
import TextGenerateEffectDemo from "./TextEffect";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import Card from "./Card";
// import Logo from "@/assets/primary-logo.png";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-x-0 top-5 z-50">
        <Container fluid className="xl:pl-8 relative">
          <Link href="/">
            <Logo />
          </Link>
        </Container>
      </div>
      <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center h-auto">
        <div className="absolute inset-0 w-full pb-20 bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <Container className="py-40 md:space-y-10">
          <TextGenerateEffectDemo />
          <ComingSoon />
          <ContactForm />
          <InfiniteMovingCardsDemo />
        </Container>
        {/* <Card /> */}
      </div>
    </div>
  );
}

// India's most loving cyber security confrence bsides ahmedabad 0x05

// bottom;
// mean while checkout our keynotes talk on youtube <link >

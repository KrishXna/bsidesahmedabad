"use client";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const words = `India's Premier Hacking Conference
`;
const title = "Bsides Ahmedabad 101";

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} title={title} />;
}

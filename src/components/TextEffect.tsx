"use client";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const words = `India's most loving cyber security conference BSides
Ahmedabad 0x05
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

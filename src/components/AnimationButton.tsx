"use client";
import React from "react";
import { Button } from "@/components/ui/MovingBorder";

export function AnimationButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black border-neutral-200"
      >
        Click
      </Button>
    </div>
  );
}

export default AnimationButton;

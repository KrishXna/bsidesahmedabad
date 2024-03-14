"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  title,
  className,
}: {
  words: string;
  title: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  let titleArray = title.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <>
        <motion.div ref={scope} className="max-w-4xl mx-auto">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span key={word + idx} className="opacity-0">
                {word}{" "}
              </motion.span>
            );
          })}
          {titleArray.map((title, idx) => {
            return (
              <motion.span key={title + idx} className="opacity-0 uppercase">
                {title}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      </>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 relative">
        <div className="text-white font-bold text-3xl md:text-5xl text-center !leading-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

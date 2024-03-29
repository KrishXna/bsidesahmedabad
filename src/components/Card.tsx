"use client";
import React from "react";
import Button from "./Button";

type Props = {
  img: any;
  title: string;
  link: string;
};
const Card = ({ img, title, link }: Props) => {
  return (
    <div>
      <img src={img} alt={title} className="w-full rounded-md shadow-sm" />
      <div className="flex justify-between gap-x-2 md:gap-x-4 items-center pt-4">
        <p className="text-white">{title}</p>
        <Button href={link} variant="primary" externalLink blank>
          Watch
        </Button>
      </div>
    </div>
  );
};

export default Card;

"use client";
import React from "react";
import Button from "./Button";

type Props = {
  img: any;
  name: string;
  title: string;
  link: string;
};
const Card = ({ img, name, title, link }: Props) => {
  return (
    <div>
      <img src={img} alt={name} className="w-full" />
      <div className="flex justify-between items-center pt-4">
        <p className="text-white">{title}</p>
        <Button href={link} variant="primary" externalLink blank>
          Watch
        </Button>
      </div>
    </div>
  );
};

export default Card;

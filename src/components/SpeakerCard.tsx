import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {
  title: string;
  img: any;
  link: string;
};

const SpeakerCard = ({ title, link, img }: Props) => {
  return (
    <div>
      <Image
        src={img}
        alt={title}
        className="w-full h-60 rounded-md shadow-sm"
      />
      <div className="flex justify-between gap-x-2 md:gap-x-4 items-center pt-4">
        <p className="text-white">{title}</p>
        <Button href={link} variant="primary" externalLink blank>
          Watch
        </Button>
      </div>
    </div>
  );
};

export default SpeakerCard;

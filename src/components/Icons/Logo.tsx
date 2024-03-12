import Image from "next/image";
import React from "react";
import LogoImage from "@/assets/primary-logo.png";

type Props = {
  width?: number;
  className?: string;
};

export const Logo = ({ width = 200, className = "" }: Props) => {
  return (
    <div className="w-[120px] sm:w-[170px]">
      <Image src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;

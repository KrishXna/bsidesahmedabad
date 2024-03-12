import Link from "next/link";
import React, { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  variant: "primary" | "colored" | "no-variant";
  type?: "button" | "submit" | "reset";
  href?: string;
  externalLink?: boolean;
  className?: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => void;
  style?: CSSProperties;
  borderSize?: number;
  blank?: boolean;
};

export const Button = ({
  children,
  href,
  style,
  onClick,
  variant = "primary",
  type = "button",
  externalLink = false,
  className = "",
  borderSize,
  blank = false,
}: Props) => {
  const classNames = {
    default: "px-4 py-2 inline-block rounded-xl",
    primary: "bg-[#36F097] text-black",
    colored: "bg-black text-[#36F097]",
    "no-variant": "",
  };
  const props = {
    type,
    href: href || "",
    className: `${
      variant !== "no-variant"
        ? classNames.default + " " + classNames[variant]
        : ""
    } ${className}`,
    onClick,
    style,
    target: blank ? "_blank" : undefined,
  };

  switch (variant) {
    case "colored":
      const colored = (component: React.ReactNode) => (
        <div
          className="rounded-xl"
          style={{
            background:
              "linear-gradient(115.05deg, #04FDA3 34.08%, #9747FF 54.75%)",
            padding: `${borderSize ? borderSize : 4}px`,
          }}
        >
          {component}
        </div>
      );

      if (href) {
        if (externalLink) return colored(<a {...props}>{children}</a>);
        else return colored(<Link {...props}>{children}</Link>);
      }

      return colored(<button {...props}>{children}</button>);
      break;
    case "primary":
    case "no-variant":
      if (href) {
        if (externalLink) return <a {...props}>{children}</a>;
        else return <Link {...props}>{children}</Link>;
      }

      return <button {...props}>{children}</button>;
      break;
    default:
      break;
  }

  return <button {...props}>{children}</button>;
};

export default Button;

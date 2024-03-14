import { Inter } from "next/font/google";
import "./globals.css";
import { Audiowide, Poppins } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--audiowide",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "BSides Ahmedabad Coming Soon 2k24",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={audiowide.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

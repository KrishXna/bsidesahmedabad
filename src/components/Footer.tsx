import React from "react";
import FooterBgImage from "@/assets/footer-bg.png";
import { Container } from "@/components/Container";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/Icons/index";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gif text-white text-center">
      <div
        className="relative py-40 bg-cover bg-center before:bg-gradient-to-r before:from-[#8a1dc971] before:to-[#04fda258] before:inset-0 before:absolute before:z-[0] after:absolute after:inset-0 after:bg-black/50"
        style={{ backgroundImage: `url(${FooterBgImage.src})` }}
      >
        <Container>
          <div className="flex flex-wrap relative z-[1] gap-y-8">
            <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center">
              <Logo width={400} />
              <div className="w-full text-center flex gap-x-6 justify-center mt-4">
                <a
                  href="https://www.facebook.com/bsidesahmedabad/"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/bsidesahmedabad/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a href="https://twitter.com/bsidesahmedabad" target="_blank">
                  <TwitterIcon className="mt-1" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bsides-ahmedabad/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative">
                <div className="uppercase mb-4">
                  <p className="mb-4">got questions?</p>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl">
                    <span className="text-[#36F097]">contact</span> us
                  </h3>
                </div>
                <a href="mailto:info@bsidesahmedabad.in">
                  info@bsidesahmedabad.in
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

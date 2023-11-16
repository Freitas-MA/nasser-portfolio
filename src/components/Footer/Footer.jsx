import React from "react";
import { FooterContainer } from "./Footer.style";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <span>Space Nas´Ser @ 2021</span>
      
        <SocialIcon
          url="https://www.instagram.com/space_nasser/"
          target="_blank"
          style={{ height: 25, width: 25, margin: 5, filter: 'grayscale(100%)' }}
        />
        <SocialIcon
          url="https://www.facebook.com/space.nasser"
          target="_blank"
          style={{ height: 25, width: 25, margin: 5, filter: 'grayscale(100%)' }}
        />
        <SocialIcon
          url="https://t.me/space_nasser"
          target="_blank"
          style={{ height: 25, width: 25, margin: 5, filter: 'grayscale(100%)' }}
        />
        {/*  */}
      </div>
      <div>
        <span>
          Designed by <strong>Freitas-MA</strong>
        </span>
        <SocialIcon
          url="https://portfolio-sepia-eight-67.vercel.app/"
          target="_blank"
          style={{ height: 25, width: 25, margin: 5, filter: 'grayscale(100%)' }}
        />
        <SocialIcon
          url="https://github.com/Freitas-MA"
          target="_blank"
          style={{ height: 25, width: 25, margin: 5, filter: 'grayscale(100%)' }}
        />
      </div>
    </FooterContainer>
  );
}

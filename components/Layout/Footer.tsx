import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__background">
        <div className="fade fade__top" />
        <div className="fade fade__left fade__dark" />
        <Image src="/static/images/antarip-1.jpg" layout="fill" objectFit="cover" alt="antarip" />
      </div>
      <div className="footer__content">
        <a href="mailto:antaripkabiraj@outlook.com" className="footer__mail">
          antaripkabiraj@outlook.com
        </a>
        <p className="footer__copy">&copy; 2022. Owned by Antarip Kabiraj</p>
        <a href="https://adriansajjan.vercel.app" target="_blank" rel="noreferrer" className="footer__link">
          Designed and Developed by Adrian Sajjan
        </a>
      </div>
    </footer>
  );
}

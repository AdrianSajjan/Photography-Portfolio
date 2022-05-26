import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <aside className="socials">
      <a href="#" className="socials__item">
        <FaFacebook color="#FFFFFF" size={24} />
      </a>
      <a href="#" className="socials__item">
        <FaInstagram color="#FFFFFF" size={24} />
      </a>
      <a href="#" className="socials__item">
        <FaTwitter color="#FFFFFF" size={24} />
      </a>
    </aside>
  );
}

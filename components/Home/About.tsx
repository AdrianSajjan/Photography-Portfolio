import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__background">
        <div className="fade fade__bottom" />
        <Image layout="fill" src="/static/images/antarip-3.jpg" alt="profile" objectFit="cover" objectPosition="50% 15%" />
      </div>
      <div className="about__content">
        <div className="about__caption">
          <svg className="about__caption-circle" width="110" height="110" viewBox="0 0 110 110">
            <path id="about-caption" d="M 55, 55 m -55, 0 a 55,55 0 1,0 110,0 a 55,55 0 1,0 -110,0 "></path>
            <text fill="#FFF">
              <textPath className="about__caption-text" xlinkHref="#about-caption" startOffset="50%" textAnchor="middle">
                Street Photographer
              </textPath>
            </text>
          </svg>
        </div>
        <p className="about__title">
          Welcome to my world of street photography. I am a freelance photographer who has a passion for capturing the raw and authentic
          moments of everyday life on the streets.
        </p>
        <p className="about__description">
          With my camera in hand, I wander through bustling cityscapes, exploring the nooks and crannies of the urban landscape in search of
          the perfect shot. My lens is my tool, and I use it to capture the beauty and energy of the world around us.
        </p>
        <p className="about__description">
          As a freelance street photographer, I am available for hire for a variety of projects. Whether you need high-quality photos for
          your brand or business, or simply want to capture the essence of a particular moment or event, I am here to help.
        </p>
        <p className="about__description">
          With my keen eye for detail and a deep understanding of the art and craft of street photography, I am confident that I can deliver
          the results you are looking for. So why wait? Contact me today, and let&apos;s start creating something beautiful together.
        </p>
        <p className="about__description">
          So that&apos;s Antarip in a nutshell. If you want to learn more about me, take a peek around the rest of my site.
        </p>
      </div>
      <div className="about__gallery">
        <div className="about__image">
          <Image src="/static/images/mountain-1.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
        </div>
        <div className="about__image">
          <Image src="/static/images/lake-1.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
        </div>
        <div className="about__image">
          <Image src="/static/images/skyline-1.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
        </div>
        <div className="about__image">
          <Image src="/static/images/lake-3.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
        </div>
        <div className="about__image">
          <Image src="/static/images/lake-2.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div>
        <button className="button button__text">
          <span>View portfolio</span>
          <BsArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

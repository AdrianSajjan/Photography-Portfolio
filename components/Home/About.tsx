import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallaxEffect } from "@hooks/useParallaxEffect";
import { MotionStyle } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  const [gallery, x] = useParallaxEffect<HTMLDivElement>({ accelarate: 0.3, vertical: true });
  const [about, y] = useParallaxEffect<HTMLDivElement>({ initialOffset: 300, finalOffset: 300, accelarate: 0.5 });

  const animatedAboutStyle: MotionStyle = {
    y,
  };

  const animatedGalleryStyle: MotionStyle = {
    x,
  };

  return (
    <section id="about" className="about">
      <div className="about__background">
        <div className="fade fade__bottom" />
        <Image layout="fill" src="/static/images/antarip-3.jpg" alt="profile" objectFit="cover" objectPosition="50% 15%" />
      </div>
      <motion.div className="about__content" ref={about} style={animatedAboutStyle}>
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
          Awkward introduction? Clammy handshake? Nah, let’s go in for a virtual bear hug and a quick two-minute spiel about who I am,
          because who I am is your new hyper-talented mate - a creative director and visual connoisseur with a background and degree in
          commercial and photojournalistic photography.
        </p>
        <p className="about__description">
          As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out
          shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from
          there I branched out into commercial work before founding my own production company, fēlan films (derived from the origin of the
          word ‘FEELING’...you feel?).
        </p>
        <p className="about__description">
          Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through
          creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the fēlan genius
          with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute - a complete guide to
          creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go.
        </p>
        <p className="about__description">
          I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live
          stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking.
          And for the next few months I’m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of
          clients.
        </p>
        <p className="about__description">
          So that’s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek
          around the rest of my site.
        </p>
      </motion.div>
      <div className="about__gallery">
        <motion.div className="about__gallery-row" style={animatedGalleryStyle} ref={gallery}>
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
          <div className="about__image">
            <Image src="/static/images/mountain-2.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
          </div>
        </motion.div>
        <motion.div className="about__gallery-row" style={animatedGalleryStyle}>
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
          <div className="about__image">
            <Image src="/static/images/mountain-2.jpg" alt="gallery-1" layout="fill" objectFit="cover" />
          </div>
        </motion.div>
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

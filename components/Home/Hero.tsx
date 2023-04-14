import Image from "next/image";
import { motion, MotionStyle } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { UnderlinePattern } from "@components/Icons";
import { useParallaxEffect } from "@hooks/useParallaxEffect";

export default function Hero() {
  const [ref, y] = useParallaxEffect<HTMLDivElement>({ accelarate: 0.75 });

  const animatedStyle: MotionStyle = {
    y,
  };

  return (
    <section className="hero" id="hero">
      <div />
      <motion.div className="hero__content" ref={ref} style={animatedStyle}>
        <div className="hero__wrapper">
          <h1 className="hero__title">Through My Lens!</h1>
          <UnderlinePattern className="hero__pattern" />
        </div>
        <p className="hero__description">
          I'm a freelance photographer with a passion for capturing the essence of everyday life on the streets. Available for hire to
          create unique and beautiful moments for your brand or business. Let's make magic together.
        </p>
        <button className="button button__primary">
          <span>See My Portfolio</span>
          <BsArrowRight />
        </button>
      </motion.div>
      <div className="hero__footer">
        <p className="hero__caption">Creating memories in Asansol, India</p>
      </div>
      <div className="hero__overlay" />
      <div className="fade fade__bottom" />
      <Image src="/static/images/mountain-2.jpg" alt="mountain" className="hero__background" layout="fill" quality={100} />
    </section>
  );
}

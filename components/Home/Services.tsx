import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { BsArrowDown, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useMediaQuery } from "@hooks/useMediaQuery";

const servicesEven: Variants = {
  visible: { opacity: 1, scale: 1, y: -50, transition: { duration: 1, y: { duration: 1, delay: 1.5 } } },
  hidden: { opacity: 0, scale: 0 },
  mobile: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, y: { duration: 0, delay: 0 } } },
};

const servicesOdd: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
  mobile: { opacity: 1, scale: 1, transition: { duration: 0 } },
};

export default function Services() {
  const serviceControls = useAnimation();
  const [servicesRef, isServicesInView] = useInView();

  const isMobile = useMediaQuery(`(max-width: 576px)`);

  useEffect(() => {
    if (isServicesInView) {
      if (isMobile) serviceControls.start("mobile");
      else serviceControls.start("visible");
    }
  }, [isServicesInView, serviceControls, isMobile]);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__cards" ref={servicesRef}>
          <motion.a href="#about" className="services__card" variants={servicesOdd} animate={serviceControls} initial="hidden">
            <div className="fade fade__bottom" />
            <Image src="/static/images/lake-2.jpg" className="services__card-image" layout="fill" alt="card" />
            <div className="services__card-overlay" />
            <h2 className="services__card-title">About Me</h2>
            <div className="services__card-button">
              <span>Learn About Me</span>
              <BsArrowDown size={20} />
            </div>
          </motion.a>
          <motion.a href="#" className="services__card" variants={servicesEven} animate={serviceControls} initial="hidden">
            <div className="fade fade__bottom" />
            <Image src="/static/images/mountain-1.jpg" className="services__card-image" layout="fill" alt="card" />
            <div className="services__card-overlay" />
            <h2 className="services__card-title">NFTs</h2>
            <div className="services__card-button">
              <span>NFT Collection</span>
              <BsArrowUpRight size={20} />
            </div>
          </motion.a>
          <motion.a href="#" className="services__card" variants={servicesOdd} animate={serviceControls} initial="hidden">
            <div className="fade fade__bottom" />
            <Image src="/static/images/lake-3.jpg" className="services__card-image" layout="fill" alt="card" />
            <div className="services__card-overlay" />
            <h2 className="services__card-title">
              Through My
              <br />
              Lens
            </h2>
            <div className="services__card-button">
              <span>View Portfolio</span>
              <BsArrowRight size={20} />
            </div>
          </motion.a>
          <motion.a href="#" className="services__card" variants={servicesEven} animate={serviceControls} initial="hidden">
            <div className="fade fade__bottom" />
            <Image src="/static/images/mountain-2.jpg" className="services__card-image" layout="fill" alt="card" />
            <div className="services__card-overlay" />
            <h2 className="services__card-title">
              Street
              <br />
              Photography
            </h2>
            <div className="services__card-button">
              <span>View Portfolio</span>
              <BsArrowRight size={20} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

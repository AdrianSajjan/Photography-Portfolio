import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment, useMemo, useState } from "react";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleMenuPress = () => {
    setNavOpen((state) => !state);
  };

  const handleMenuClose = () => {
    setNavOpen(false);
  };

  const navClassList = useMemo(() => (isNavOpen ? "nav nav__open" : "nav"), [isNavOpen]);

  const menuClassList = useMemo(() => (isNavOpen ? "header__lines header__lines-open" : "header__lines"), [isNavOpen]);

  return (
    <Fragment>
      <header className="header">
        <button className="header__menu" onClick={handleMenuPress}>
          <motion.span className={menuClassList} />
          <motion.span className={menuClassList} />
        </button>
        <h3 className="header__brand">Antarip Kabiraj</h3>
        <button className="button button__secondary header__button">Get In Touch</button>
      </header>
      <nav className={navClassList}>
        <div className="nav__left" />
        <div className="nav__right">
          <div className="fade fade__top fade__dark" />
          <div className="fade fade__left fade__dark" />
          <Image src="/static/images/lake-1.jpg" alt="lake" layout="fill" objectFit="cover" />
        </div>
        <div className="nav__content">
          <Link href="/" passHref>
            <a onClick={handleMenuClose} className="nav__link">
              Home
            </a>
          </Link>
          <Link href="/#about">
            <a onClick={handleMenuClose} className="nav__link">
              About
            </a>
          </Link>
          <Link href="/portfolio">
            <a onClick={handleMenuClose} className="nav__link">
              Portfolio
            </a>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

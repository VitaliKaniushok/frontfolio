"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "../constants";

import { Logo } from "./Logo";

import clsx from "clsx";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(function manageHandleScrollEvent() {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(styles.navbar, {
        [styles["navbar--scrolled"]]: scrolled,
      })}
    >
      <div className={`container-narrow ${styles.navbar__container}`}>
        <Logo />

        {/* Desktop Navigation */}
        <div className={styles["navbar__desktop-nav"]}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navbar__link}>
              {link.label}
            </a>
          ))}

          {/* <button
            onClick={onToggleEngineering}
            className={`${styles["navbar__eng-btn"]} ${
              engineeringMode ? styles["navbar__eng-btn--active"] : ""
            }`}
          >
            <Terminal size={14} />
            <span>Eng Mode</span>
          </button> */}
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles["navbar__mobile-toggle"]}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles["navbar__mobile-menu"]}
          >
            <div className={`container-narrow ${styles["mobile-content"]}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={styles.navbar__link}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

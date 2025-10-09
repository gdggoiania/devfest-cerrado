/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useRef, useState } from "react";
import configValues from "helpers/config";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isNavbarVisible ? styles.visible : ""}`}
    >
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/devfestCerradoHorizontal.png" width={200} alt="" />
        </a>
      </div>
      <ul className={styles.navItems}>
        <li>
          <a className={styles.navItem} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navItem} href="/about">
            Sobre
          </a>
        </li>
        {/* <li>
          <a className={styles.navItem} href="#certificate">
            Certificado
          </a>
        </li> */}
        <li>
          <a className={styles.navItem} href="/speakers">
            Palestrantes
          </a>
        </li>
        {/* <li>
          <a className={styles.navItem} href="#schedule">
            Agenda
          </a>
        </li> */}
        {/* <li>
          <a className={styles.navItem} href="#album">
            Álbum
          </a>
        </li> */}
        <li>
          <a className={styles.navItem} href="/sponsors">
            Patrocinadores
          </a>
        </li>
        <li>
          <a
            className={`${styles.navItem} ${styles.navItemRegister}`}
            href="#tickets"
          >
            Inscreva-se
          </a>
        </li>
      </ul>
    </nav>
  );
};

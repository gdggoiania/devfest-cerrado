/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from "./home-navbar.module.css";

const NavbarHome = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  const menu = [
    { name: "Sobre", ref: "#about" },
    { name: "Palestrantes", ref: "#speakers" },
    // { name: "Agenda", ref: '#schedule' },
    { name: "Álbum", ref: "#album" },
    { name: "Patrocinadores", ref: "#sponsors" },
    // {name: "Inscreva-se", ref: '#tickets'},
  ];

  const toggle = () => setIsOpen(!isOpen);

  const generateRef = (ref: string) => {
    if (ref.includes("https")) {
      return ref;
    }
    return router.pathname != "/" ? `/${ref}` : ref;
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        isScrolling ? styles.navbar_fixed_scrolling : styles.navbar_fixed
      }
    >
      <Navbar className={styles.main_navbar} color="faded" light expand="lg">
        <NavbarBrand className={styles.nav_brand}>
          <img
            alt="Logo DevFest Cerrado"
            src="/devfestCerradoHorizontal.png"
            width="180px"
          />
        </NavbarBrand>
        {/* <NavbarBrand className={styles.nav_brand}>{isScrolling ? <img src='/devfestCerradoHorizontal.png' width="180px"/> :  <img src='/devfestCerradoHorizontal.png' width="135px"/>}</NavbarBrand> */}
        <Collapse
          className={[
            styles.collapse_menu,
            isOpen ? styles.opened_menu : "",
          ].join(" ")}
          isOpen={isOpen}
          navbar
        >
          <Nav className="ms-auto" navbar>
            {menu.map((menuItems, index) => (
              <NavItem key={"nav-item-" + index}>
                <NavLink
                  className={
                    isScrolling
                      ? [styles.nav_link, styles.shadow_scrolling].join(" ")
                      : styles.nav_link
                  }
                  style={{
                    color: isScrolling || isOpen ? "#232323" : "#ffffff",
                  }}
                  href={generateRef(menuItems.ref)}
                >
                  {menuItems.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHome;

/* TODO: CREATE HOVER ANIMATION AND ACTIVE STATE FOR DESKTOP NAV */
/* TODO: CREATE ACTIVE STATE FOR MOBILE NAV */

/* TODO: ON HOME CLICK -> CLOSE THE HAMBURGER NAV */
/* TODO: CREATE NEW ROUTE FOR ALL ADDITIONAL PAGES IN HAMBURGER NAV */

/* TODO: DOWNLOAD REQUIRED FONTS (LOW PRIORITY) */
/* TODO: EDIT CLOSE ICON TO LOOK LIKE WEBSITE (LOW PRIORITY) */

"use client";
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.navDesktop}>
        <Image src={require("../assets/icons/shiso-logo-default.svg")} alt="brand default logo"/>
        <ul>
          <Link href="/menu">MENU</Link>
          <Link href="/location">LOCATIONS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/order">ORDER</Link>
          <Link href="/merch">MERCH</Link>
          <Link href="/jobs">JOBS</Link>
        </ul>
      </div>

      <div className={styles.navMobile}>
        <ul className={styles.navbarMobile}>
          <Link href="/menu" className={styles.navbarMobileActive}>
            <Image src={require("../assets/icons/icon-burger.svg")} alt="menu icon"/>
            Menu
          </Link>
          <Link href="/location">
            <Image src={require("../assets/icons/icon-location.svg")} alt="location icon"/>
            Locations
          </Link>
          <Link href="/order">
            <Image src={require("../assets/icons/icon-order.svg")} alt="menu icon"/>
            Order
          </Link>
          <div onClick={() => setIsOpen(true)} className={styles.hamburgerMenu}>
            <Image src={require("../assets/icons/more-icon.svg")} alt="menu icon"/>
            More
          </div>
        </ul>
      </div>

      <div className={[styles.navHamburger, isOpen && styles.navHamburgerOpen].join(' ')}>
        <ul>
          <div className={styles.navHamburgerPageOptions}>
            <Link href="/">HOME</Link>
            <Link href="/location">ABOUT</Link>
            <Link href="/merch">MERCH</Link>
            <Link href="/jobs">JOBS</Link>
          </div>
          
          <div>
            <Link href="/contact">GET IN TOUCH</Link>
            <Link href="/imprint">IMPRINT</Link>
            <Link href="/privacy">PRIVACY POLICY</Link>
          </div>

          <div>
            <Link href="/franchise">BECOME A FRANCHISE PARTNER</Link>
          </div>
        </ul>
        <div className={styles.closeIcon} onClick={() => setIsOpen(false)}>X</div>
      </div>
    </>
  )
}
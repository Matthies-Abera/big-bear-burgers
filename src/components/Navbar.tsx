/* TODO: EDIT CLOSE ICON TO LOOK LIKE WEBSITE (LOW PRIORITY) */
"use client"
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { desktopPages, mobilePages } from '@/utils/BusinessInformation'

export default function Navbar(props: { currentPage?: string; }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.navDesktop} data-testid='navigation-bar'>
        <Image src={require("../assets/icons/shiso-logo-default.svg")} alt="brand default logo"/>
        <ul>
          {desktopPages.map(page =>
            <Link
              href={page.href}
              key={page.name}
              className={page.name == props.currentPage ? styles.navDesktopActive : ''}
              role='desktop-navbar-item'
            >
              {page.name.toUpperCase()}
            </Link>
          )}
        </ul>
      </div>

      <div className={styles.navMobileHeader}>
        <Image src={require("../assets/icons/shiso-logo-default.svg")} alt="brand default logo"/>
      </div>

      <div className={styles.navMobile} data-testid='navigation-bar'>
        <ul className={styles.navbarMobile}>
          {mobilePages.map(page =>
            <Link
              href={page.link.href}
              key={page.link.name}
              className={page.link.name == props.currentPage ? styles.navbarMobileActive : ''}
              role='mobile-navbar-item'
            >
              <Image src={page.icon} alt={page.alt}/>
              {page.link.name}
            </Link>
          )}
          <div onClick={() => setIsOpen(true)} className={styles.hamburgerMenu}>
            <Image src={require("../assets/icons/more-icon.svg")} alt="menu icon"/>
            More
          </div>
        </ul>
      </div>

      <div className={[styles.navHamburger, isOpen && styles.navHamburgerOpen].join(' ')}>
        <ul>
          <div className={styles.navHamburgerPageOptions}>
            <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
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
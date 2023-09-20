/* TODO: RESTYLE IMAGE IN TERMS ON Z-INDEX */
"use client"
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import { footerPages } from '@/utils/BusinessInformation'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.pageLinks}>
                {footerPages.map(page =>
                    <Link href={page.href} key={page.name}>{page.name.toUpperCase()}</Link>
                )}
            </div>

            <div className={styles.middleContact}>
                <Image src={require("../assets/icons/Shiso-Logo-White.svg")} alt="brand white logo" onClick={() => window.scrollTo(0, 0)}/>
                <p>Copyright 2022 - Shiso Burger BmbH</p>
                <div className={styles.additionalLinks}>
                    <Link href="/contact">Contact</Link>
                    <div className={styles.verticalLine}></div>
                    <Link href="/imprint">Imprint</Link>
                    <div className={styles.verticalLine}></div>
                    <Link href="/privacy">Privacy</Link>
                </div>
                <div className={styles.externalLinks}>
                    <Image src={require("../assets/icons/instagram.svg")} alt="brand default logo"/>
                    <Image src={require("../assets/icons/linkedin.svg")} alt="brand default logo"/>
                </div>
            </div>

            <div className={styles.careerButton}><button>WORK WITH US!</button></div>
            <Image src={require("../assets/icons/shiso-dog-cooking.svg")} alt="mascot cooking" className={styles.backgroundLogo}/>
        </div>
    )
}
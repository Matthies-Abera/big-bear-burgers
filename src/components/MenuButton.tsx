// TODO: ACTIVE STATE

import Image from 'next/image'
import styles from '../styles/MenuButton.module.css'

export default function MenuButton(props:{name: string, image: typeof import("*.avif")}) {
  return (
    <div className={styles.menuButton}>
        <Image src={props.image} alt={props.name} className={styles.menuImage}/>
        <div className={styles.menuText}>{props.name.toUpperCase()}</div>
    </div>
  )
}
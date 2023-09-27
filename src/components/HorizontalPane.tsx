import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/HorizontalPane.module.css'
import { HPHorizontalPaneData } from '@/utils/BusinessInformation'

export default function HorizontalPane(data: HPHorizontalPaneData) {
  return (
    <section className={styles.moreInfoSection}>
      <Image src={data.image} alt='' className={styles.reversedImage}/>
      <div className={styles.moreInfoContainer}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div><hr/>{data.verticalText}</div>
        <Link href={data.link.href}><button>{data.link.name}</button></Link>
      </div>
    </section>
  )
}
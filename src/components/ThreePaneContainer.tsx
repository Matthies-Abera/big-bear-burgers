import Link from 'next/link'
import styles from '../styles/ThreePaneContainer.module.css'
import { ThreePaneContainer } from '@/utils/BusinessInformation'

export default function ThreePaneContainer(data: ThreePaneContainer) {
  return (
    <div className={styles.paneContainer}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div><hr/>{data.verticalText}</div>
        {data.hasButton && <Link href={data.link!.href}><button>{data.link!.name}</button></Link>}
    </div>
  )
}
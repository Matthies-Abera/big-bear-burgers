import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function Imprint() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Imprint' />
      <h1>IMPRINT</h1>
    </div>
  )
}

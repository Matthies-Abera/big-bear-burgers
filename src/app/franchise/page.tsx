import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function Franchise() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Franchise' />
      <h1>FRANCHISE</h1>
    </div>
  )
}

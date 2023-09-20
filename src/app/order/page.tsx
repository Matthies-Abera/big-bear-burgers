import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function Order() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Order' />
      <h1>ORDER</h1>
    </div>
  )
}

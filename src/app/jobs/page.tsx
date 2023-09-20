import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function Jobs() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Jobs' />
      <h1>JOBS</h1>
    </div>
  )
}

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Jobs() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Jobs' />
      <h1>JOBS</h1>
      <Footer />
    </div>
  )
}

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Merch() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Merch' />
      <h1>MERCH</h1>
      <Footer />
    </div>
  )
}

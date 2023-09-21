import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Policy() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Policy' />
      <h1>POLICY</h1>
      <Footer />
    </div>
  )
}

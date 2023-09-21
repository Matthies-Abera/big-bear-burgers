import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Careers() {
  return (
    <div className={styles.careers}>
      <Navbar currentPage='Careers' />
      <h1>Careers</h1>
      <Footer />
    </div>
  )
}

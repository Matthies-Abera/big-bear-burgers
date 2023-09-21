import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Menu() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Menu' />
      <h1>MENU</h1>
      <Footer />
    </div>
  )
}

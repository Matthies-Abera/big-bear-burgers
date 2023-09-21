import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Location() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Locations' />
      <h1>LOCATION</h1>
      <Footer />
    </div>
  )
}

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Contact' />
      <h1>CONTACT</h1>
      <Footer />
    </div>
  )
}

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='About' />
      <h1>ABOUT</h1>
      <Footer />
    </div>
  )
}

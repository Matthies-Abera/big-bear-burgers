import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      <div className={styles.heroSection}>
        <video autoPlay muted loop className={styles.video}>         
          <source src='/Untitled.mov' type="video/mp4"/>       
        </video>
        <h1 className={styles.heroTitle}>SHISO BURGER:<br/>THE BEST OF TWO WORLDS</h1>
      </div>

      <Footer />
    </div>
  )
}

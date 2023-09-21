import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <h1>HOME</h1>
      <Footer />
    </div>
  )
}

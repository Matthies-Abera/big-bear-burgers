import Navbar from '@/components/Navbar'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='About' />
      <h1>ABOUT</h1>
    </div>
  )
}

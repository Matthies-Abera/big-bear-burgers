import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.main}>
      <Navbar currentPage='Contact' />
      <h1>CONTACT</h1>
    </div>
  )
}

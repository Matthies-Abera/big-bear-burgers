import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <h1>HOME</h1>
    </div>
  )
}

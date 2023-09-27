/* TODO: FIX ALIGNMENT IN LOCATION SECTION FOR DESKTOP VIEWPORT */
/* TODO: FIGURE OUT HOW TO IMPLEMENT VERTICAL LINES */
/* TODO: IMPLEMENT FOG FADE ON IMAGES (LOW PRIORITY) */

import Navbar from '@/components/Navbar'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import HorizontalPane from '@/components/HorizontalPane'
import { HPHorizontalPanes } from '@/utils/BusinessInformation'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      <section className={styles.heroSection}>
        <video autoPlay muted loop className={styles.video}>         
          <source src='/Untitled.mov' type="video/mp4"/>       
        </video>
        <h1 className={styles.heroTitle}>SHISO BURGER:<br/>THE BEST OF TWO WORLDS</h1>
      </section>

      <section className={styles.locationSection}>
        <p><b>Do you like burgers and have a taste for Asian cuisine?</b> With us, you get both in one. Shiso Burger stands for freshly made burgers with fine ingredients – in our Berlin-Mitte home base and in many cities worldwide.</p>
        <Image src={require("../assets/images/fresh-burger-and-worker.avif")} className={styles.burgerImage} alt='resh-burger-and-worker'/>
        <p>Enjoy meat from Angus beef, refined spices and delicious sauces from our own production in homemade buns. On request, we serve our Asia Burger with some of our additional Extras, of your choosing.</p>
        <Link href='/location'><button>FIND A LOCATION NEAR YOU</button></Link>
      </section>

      <section className={styles.newProductSection}>
        <Image src={require('../assets/images/burger-foregound.avif')} alt=''/>
        <div className={styles.newProductInfo}>
          <h2>NEW BURGER - BUL DAK Burger</h2>
          <p>Shiso Burger - Burger Family just got bigger! The BUL DAK Burger is now here, our spicy fried Chicken Burger. Only in Berlin Augustr.</p>
          <div><hr/>MENU PRODUCT</div>
        </div>
      </section>

      {HPHorizontalPanes.map(page =>
        <HorizontalPane
          image={page.image}
          title={page.title}
          description={page.description}
          verticalText={page.verticalText}
          link={page.link}
          key={page.title}
        />
      )}

      <Footer />
    </div>
  )
}

/* TODO: FIX ALIGNMENT IN LOCATION SECTION FOR DESKTOP VIEWPORT */
/* TODO: IMPLEMENT FOG FADE ON IMAGES (LOW PRIORITY) */
"use client"
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HorizontalPane from '@/components/HorizontalPane'
import ThreePaneContainer from '@/components/ThreePaneContainer'
import { exploreData, franchiseData, HPHorizontalPanes, newProductData } from '@/utils/BusinessInformation'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      <section className={styles.heroContainer}>
        <video autoPlay muted loop className={styles.video}>         
          <source src='/Untitled.mov' type="video/mp4"/>       
        </video>
        <h1 className={styles.heroTitle}>SHISO BURGER:<br/>THE BEST OF TWO WORLDS</h1>
      </section>

      <section className={styles.locationContainer}>
        <p><b>Do you like burgers and have a taste for Asian cuisine?</b> With us, you get both in one. Shiso Burger stands for freshly made burgers with fine ingredients – in our Berlin-Mitte home base and in many cities worldwide.</p>
        <div>
          <Image src={require("../assets/images/fresh-burger-and-worker.avif")} className={styles.burgerImage} alt='resh-burger-and-worker'/>
          <p>Enjoy meat from Angus beef, refined spices and delicious sauces from our own production in homemade buns. On request, we serve our Asia Burger with some of our additional Extras, of your choosing.</p>
          <Link href='/location'><button>FIND A LOCATION NEAR YOU</button></Link>
        </div>
      </section>

      <section className={styles.newProductContainer}>
        <Image src={require('../assets/images/burger-foregound.avif')} alt=''/>
        <ThreePaneContainer
          title={newProductData.title}
          description={newProductData.description}
          verticalText={newProductData.verticalText}
          hasButton={newProductData.hasButton}
        />
      </section>

      {HPHorizontalPanes.map(page =>
        <HorizontalPane
          image={page.image}
          content={page.content}
          key={page.content.title}
        />
      )}

      <section className={styles.exploreContainer}>
        <Image src={require("../assets/images/man-at-pass.avif")} className={styles.burgerImage} alt='resh-burger-and-worker'/>
        <ThreePaneContainer
          title={exploreData.title}
          description={exploreData.description}
          verticalText={exploreData.verticalText}
          hasButton={exploreData.hasButton}
          link={exploreData.link}
        />
        <Image src={require("../assets/images/vacant-dinning.avif")} className={styles.burgerImage} alt='resh-burger-and-worker'/>
      </section>

      <section className={styles.franchiseContainer}>
        <Image src={require("../assets/images/fox.avif")} className={styles.burgerImage} alt='resh-burger-and-worker'/>
        <ThreePaneContainer
          title={franchiseData.title}
          description={franchiseData.description}
          verticalText={franchiseData.verticalText}
          hasButton={franchiseData.hasButton}
          link={franchiseData.link}
        />
      </section>

      <Footer />
    </div>
  )
}

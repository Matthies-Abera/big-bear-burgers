"use client"
import Image from 'next/image'
import styles from '../styles/HorizontalPane.module.css'
import { HPHorizontalPaneData } from '@/utils/BusinessInformation'
import ThreePaneContainer from './ThreePaneContainer'

export default function HorizontalPane(data: HPHorizontalPaneData) {
  return (
    <section className={styles.horizontalPane} data-testid='section' role='three-pane'>
      <Image src={data.image} alt={data.content.description} className={styles.reversedImage}/>
      <ThreePaneContainer 
        title={data.content.title}
        description={data.content.description}
        verticalText={data.content.verticalText}
        hasButton={true}
        link={data.content.link}
      /> 
    </section>
  )
} 
"use client";
import Image from 'next/image'
import styles from '../styles/MenuItem.module.css'
import { MenuItem } from '../utils/BusinessInformation'
import { useState } from 'react';

export default function MenuItem(data: MenuItem) {

    const [isClosed, setIsClosed] = useState(true);

    function handleClick() {
        setIsClosed(!isClosed);
    }

    return (
        <section className={styles.menuItem}>

            <h2>{data.name.toUpperCase()}</h2>
            <div className={styles.subtype}>
                {data.subtype.map(subtype =>
                    <i className={styles.subtypeText} key={subtype}>{subtype}</i>
                )} 
            </div>
            { data.description != null &&
                <p className={styles.description}>{data.description}</p>
            }
            <Image src={data.image} alt={data.name} className={styles.itemImage}/>

            <div className={styles.drownDownButton} onClick={() => handleClick()}>
                <h3>WHAT&apos;S IN IT</h3>
                <Image src={require('../assets/icons/ingredients.svg')} alt='ingredients image'/>
            </div>

            <div className={[styles.downDownInformation, isClosed && styles.downDownClosed].join(' ')}>
                {data.ingredients.map(ingredient =>
                    <p key={ingredient}>{ingredient}</p>
                )}
                
                {data.allergens != null &&
                    <>
                        <h3 className={styles.allergenTitle}>ALLERGY INFO</h3>
                        <div className={styles.allergens}>
                            {data.allergens.map(allergen =>
                                allergen != data.allergens![data.allergens!.length - 1]
                                ? <p key={allergen}>{allergen}, </p>
                                : <p key={allergen}>{allergen}.</p>
                            )}
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

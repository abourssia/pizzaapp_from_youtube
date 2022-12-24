import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from "next/link";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callbutton}>
            <Image src="/img/telephone.png" width="32" height="32"/>
          </div>
          <div className={styles.texts}>
          <div className={styles.text}> Order Now </div>
          <div className={styles.text}> 21364 </div>

          </div>
        </div>
        <div className={styles.item}> 
            <ul className={styles.list}>
              <li className={styles.listItem}>Homepage</li>
              <li className={styles.listItem}>Products</li>
              <li className={styles.listItem}>Events</li>
              <div className ={styles.mLogo}> Ameena'z</div>
              <li className={styles.listItem}>Menu</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <Link href='/cart' passHref>
        <div className={styles.item}> 
            <div className={styles.cart}>
            <Image src='/img/cart.png' height="32" width="32" />
            <div className={styles.counter}> {quantity} </div>

            </div>
        
        </div>
        </Link>

    </div>
  )
}

export default Navbar

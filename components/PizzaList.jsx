import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from '../components/PizzaCard'
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> PiZzzZza</h1>
        <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea, 
        esse dolorum quia labore minima voluptatibus 
        unde maxime quaerat similique distinctio, corrupti magni nostrum debitis eum possimus? Ut, obcaecati suscipit.</p>
        <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}        
        
        </div>
    </div>


  );
}

export default PizzaList
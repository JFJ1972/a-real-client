import React from 'react'
import styles from "./styles.module.scss"
import img1 from "../../assets/Hogar.jpg"
import img2 from "../../assets/hogares.jpg"

const Titleh = () => {
  return (
    
    <div className={styles.titleh}>
      
        <h1><img className={styles.img1}src={img1} alt=""/>
        Aseo Hogar</h1>
       <img className={styles.img2} src={img2} alt=""/>
         
    </div>
  )
}

export default Titleh
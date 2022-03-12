import React from 'react'
import styles from "./styles.module.scss"
import img3 from "../../assets/Familia.jpg"
import img4 from "../../assets/personal.jpg"

const Titlep = () => {
  return (
    
    <div className={styles.titlep}>
        <h1><img className={styles.img3}src={img3} alt=""/>
        Cuidado Personal</h1>
        <img className={styles.img4} src={img4} alt=""/>
        </div>
    
  )
}

export default Titlep
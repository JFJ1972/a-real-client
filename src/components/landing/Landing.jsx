import React from "react";
import Titlep from "../titlep/Titlep";
import Titleh from "../titleh/Titleh";
import styles from "./styles.module.scss";
import img5 from "../../assets/Logo.jpg"

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.p}>
        <Titlep />
      </div>
      <div className={styles.log}>
        <img className={styles.log} src={img5} alt="" />
      </div>
      <div className={styles.h}>
        <Titleh />
      </div>
    </div>
  );
};

export default First;

import React, {Component} from 'react';
import styles from './Imageworker.module.css';
import nalfgas from './mousqueton.jpg';


const Grille= () => {

  

  return (
<div className={styles.container}>
    <div className={styles.subContainer}>
        <div className={styles.frame}>
        <img src="https://previews.123rf.com/images/sabelskaya/sabelskaya1603/sabelskaya160300156/54119905-carr%C3%A9-neon-lumi%C3%A8re-bleue-au-n%C3%A9on-.jpg" className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>

        <div className={styles.frame}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>
    </div>
    <div className={styles.Container2}>
        <div className={styles.frame1}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>

        <div className={styles.frame1}>
        <img src={nalfgas} className={styles.image} height="200px" width="200px" alt="nalfgas"/>
        </div>
    </div>
</div>
  )
}

export default Grille;

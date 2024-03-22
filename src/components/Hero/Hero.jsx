import React from "react";
import { heroImage } from "../../../assets/about";
import styles from './Hero.module.css' 

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anton</h1>
        <p className={styles.descrition}>
            I am a student at the Technical University. I've been learning programming for 1 year, but I don't have any experience in this field. I have a great desire to learn and develop.
        </p>
        <a href="mailto:anton7uzunov7@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}
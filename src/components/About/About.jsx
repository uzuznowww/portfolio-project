import React from "react";
import aboutImage from "../../../assets/about/aboutImage.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import styles from './About.module.css';

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={aboutImage}
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursorIcon} />
              <div className={styles.aboutItemText}>
                <h3>JavaScript-Basic</h3>
                <p>
                 <a href="https://softuni.bg/certificates/details/151145/d41587fc">Certificate</a> 
                </p>
              </div>
              </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} />
            <div className={styles.aboutItemText}>
              <h3>JavaScript-Fundamentals</h3>
              <p>
                <a href="https://softuni.bg/Certificates/Details/169172/0ac218e2">Certificate</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

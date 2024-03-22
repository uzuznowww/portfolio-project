import React from "react";

import emailIcon from "../../../assets/contact/emailIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text} >
            <h2>Contact</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt='Email icon' />
                <a href="malito:anton7uzunov7@gmail.com">gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} alt='lenkedin icon' />
                <a href="https://www.linkedin.com/in/anton-uzunov-63178a258/">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt='Github icon' />
                <a href="https://github.com/uzuznowww">github.com</a>
            </li>
        </ul>
    </footer>
    )
}
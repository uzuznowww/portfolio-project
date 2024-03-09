import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

export const Contact = () => {
    return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text} >
            <h2>Contact</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon' />
                <a href="malito:anton7uzunov7@gmail.com">gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='lenkedin icon' />
                <a href="https://www.linkedin.com/in/anton-uzunov-63178a258/">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon' />
                <a href="https://github.com/uzuznowww">github.com</a>
            </li>
        </ul>
    </footer>
    )
}
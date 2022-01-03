import React from 'react'
import styles from '../styles/Nav.module.scss'


export default function MainNav() {
    return (
        <nav className={styles.nav}>
            <a href="/"><span className="material-icons">home</span></a>
        </nav>
    )
}

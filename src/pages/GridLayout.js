import React from 'react'
import styles from './gridLayout.module.css'

const GridLayout = () => {
    return (
        <div className={styles.grid}>
            <header>Header</header>
            <nav>Navigation</nav>
            <section>Section</section>
            <aside>Aside information</aside>
            <footer>Footer - All Rights reserved</footer>
        </div>
    )
}

export default GridLayout

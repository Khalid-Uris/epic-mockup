import React from 'react'
import { GrClose } from 'react-icons/gr'
import styles from '../css/Topbar.module.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <section className={styles.stick}>
            <div >
                <div className={styles.topbar}>
                    <div className="container-fluid h-100">
                        <div className={styles.epicNav}>
                            <span>epic mockup</span>
                            <Link to='/'>

                                <GrClose size={22} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar

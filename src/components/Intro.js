import React from 'react'
import styles from '../css/Index.module.css';
import { Link } from 'react-router-dom';



const Intro = () => {
  return (
    <section>
                <div className="container">
                    <div className="row">
                        <div className={"col-md-12"}>
                            <div className={styles.title}>

                                <h2>epic mockup</h2>
                                <span>design solutions</span>

                            </div>

                            <div className={styles.parentBox}>
                                <div className={styles.childBoxOne}>
                                    <h4>welcome to epic mockup where you can <br />
                                        design your board
                                    </h4>
                                    <div  className='mx-auto'>
                                    <Link to={'/multi_step'}>
                                        <button type='button' className={styles.btn}>Get Started</button>
                                    </Link>
                                    </div>
                                 
                                </div>
                                {/* <div className={styles.childBoxTwo}>
                                   
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Intro
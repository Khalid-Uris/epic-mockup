import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../css/MultiStep.module.css'
import ConvertPng from './ConvertPng';


// const redirect = useNavigate();

const UploadLogoBox = ({setImageData}) => {
    const fileInput=useRef();

    const selectFile = () => {
        fileInput.current.click();
    }

    const [image, setImage]=useState("");
    const imageChangeHandle=(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        setImageData(image);
    
    }, [])
    
  return (
    <section>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className={styles.box}>
                        <h6>create text</h6>
                        <p>or</p>
                        
                        <input type="file" style={{display:"none"}} ref={fileInput} onChange={imageChangeHandle}/>
                        <button onClick={selectFile} className={styles.btn}>Upload Logo</button>

                        <div className={styles.logoclassName}>
                            Logo should be in the standard <br />
                            format png.
                        </div>
                        
                        {/* {image ? } */}
                        
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default UploadLogoBox

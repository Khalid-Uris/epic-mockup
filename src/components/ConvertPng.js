import React from 'react'
import style from '../css/ConvertPng.module.css';
import Box from './Box';

const ConvertPng = ({ imageData }) => {




  return (
    
      <Box  className='d-flex justify-content-center'>
        <div className='d-flex align-items-center'>


        <div className={style.imageWrapper}>
          <div className={style.image}>
            <img src={imageData} alt="error"/>
          </div>

        </div>
        <div className={style.left}>
            <button type='button' className={style.btn}>Convert to PNG</button>
            <p>seems like the selected<br />
              image in .jpeg format.
            </p>
          </div>
          </div>
      </Box>

  )
}

export default ConvertPng

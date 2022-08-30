import React, { useState } from 'react'
import style from '../css/ConvertPng.css';

const ConvertPng = ({imageData}) => {
   



  return (
    <section>
        <div className="container">
            <div className="row ">
              <div className="col-md-12">
               <div className="box">

               </div>
            </div>
          </div>
        </div>
        <img src={imageData} alt="" />
    </section>
 
  )
}

export default ConvertPng

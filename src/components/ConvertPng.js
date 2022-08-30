import React, { useState } from 'react'

const ConvertPng = ({imageData}) => {
   
  

    // const [file, setFile]=useState("");

    // const handleChange=(e)=>{
    //     setFile(URL.createObjectURL(e.target.files[0]))
    // }
  return (
    <div>
      {/* <input type="file" onChange={handleChange}/> */}
      {/* {props.imageData} */}
      <h2>Convert To Png</h2>
      <img src={imageData} alt="" />
      {/* <img src={props.imageData} alt="error" /> */}
    </div>
  )
}

export default ConvertPng

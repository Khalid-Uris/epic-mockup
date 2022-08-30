import React, { useState } from 'react'
import ConvertPng from '../components/ConvertPng'
import Topbar from '../components/Topbar'
import UploadLogoBox from '../components/UploadLogoBox'

const MultiStep = () => {

  
  const [image, setImage] = useState("");
  return (
    <main>
        <Topbar/>
        <UploadLogoBox setImageData={setImage}/>
        <ConvertPng imageData={image}/>
    </main>
  )
}

export default MultiStep
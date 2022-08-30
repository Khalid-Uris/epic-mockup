import React, { useState } from "react";
import ConvertPng from "../components/ConvertPng";
import Topbar from "../components/Topbar";
import UploadLogoBox from "../components/UploadLogoBox";

const MultiStep = () => {
  const [image, setImage] = useState("");
  return (
    <main>
      <Topbar />
      {image ? (
        <ConvertPng imageData={image} />
      ) : (
        <UploadLogoBox setImageData={setImage} />
      )}
    </main>
  );
};

export default MultiStep;

import React from "react";
import ConvertPng from "../components/ConvertPng";
import UploadLogoBox from "../components/UploadLogoBox";

const ImageUpload = ({ image, setImage }) => {
  return (
    <main>
      {image ? (
        <ConvertPng imageData={image} />
      ) : (
        <UploadLogoBox setImageData={setImage} />
      )}
    </main>
  );
};

export default ImageUpload;

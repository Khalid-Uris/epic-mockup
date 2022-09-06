import React, { useRef } from "react";
import styles from "../css/MultiStep.module.css";
import Box from "./Box";
import { useMultiStep } from "./MultiStepForm/components/MultiStepContext";

// const redirect = useNavigate();

const UploadLogoBox = ({ setImageData }) => {
  const { setActiveStep } = useMultiStep();

  const fileInput = useRef();

  const selectFile = () => {
    fileInput.current.click();
  };

  const imageChangeHandle = (e) => {
    setImageData(URL.createObjectURL(e.target.files[0]));
    setActiveStep("stepTwo"); // pass whatever step id you want to set
  };

  return (
    <Box className="d-flex justify-content-center">
      <h6 className={styles.heading}>create text</h6>
      <p>or</p>

      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={imageChangeHandle}
      />
      <button onClick={selectFile} className={styles.btn}>
        Upload Logo
      </button>

      <div className={styles.logoclassName}>
        Logo should be in the standard <br />
        format png.
      </div>

      {/* {image ? } */}
    </Box>
  );
};

export default UploadLogoBox;

import React from "react";
import Box from "./Box";
import Topbar from "./Topbar";
import styles from "../css/BoardType.module.css";

const BoardType = () => {
  return (
    <main>
      <Topbar />
      <Box className="d-flex justify-content-center">
        <div>
          <img src="" alt="error" />
        </div>
      </Box>
      <div className={styles.btnParent}>
        <button type="button" className={styles.btnBrandType}>
          select board type
        </button>
        <p className={styles.paraOr}>Or</p>
        <button type="button" className={styles.btnNewLogo}>
          upload new logo
        </button>
      </div>
    </main>
  );
};

export default BoardType;

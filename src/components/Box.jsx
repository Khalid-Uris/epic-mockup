import React from "react";
import styles from "../css/Box.module.css";

function Box({ children, className = "" }) {
  return (
    <section>
      <div className="container my-4">
        <div className="row">
          <div className={`col-md-12 ${className}`}>
            <div className={styles.box}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Box;

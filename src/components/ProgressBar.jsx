import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ current, total }) => {
    return (
        <div className={"progress-bar"}>
            <progress
                value={current}
                min="0"
                max={total}
                style={{ visibility: "hidden", height: "0", width: "0" }}
            ></progress>
        </div>
    );
};

export default ProgressBar;

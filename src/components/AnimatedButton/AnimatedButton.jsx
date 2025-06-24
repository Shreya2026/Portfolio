import React, { useRef, useState } from "react";
import "./AnimatedButton.css";
import myResume from "../../assets/myResume.pdf";

const AnimatedButton = () => {
  const [checked, setChecked] = useState(false);
  const openUrlRef = useRef(null);

  // Download the PDF
  const handleDownload = async () => {
    const response = await fetch(myResume);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "myResume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Do NOT revoke the URL here!
    openUrlRef.current = url;
    setChecked(true);
  };

  // Open the PDF in a new tab
  const handleOpen = () => {
    if (openUrlRef.current) {
      window.open(openUrlRef.current, "_blank");
      // Optionally, revoke after opening (if you want to allow only one open)
      // window.URL.revokeObjectURL(openUrlRef.current);
      // openUrlRef.current = null;
    }
  };

  const handleChange = async () => {
    if (!checked) {
      await handleDownload();
    } else {
      handleOpen();
    }
  };

  return (
    <div className="container">
      <label className="label">
        <input
          type="checkbox"
          className="input"
          checked={checked}
          onChange={handleChange}
        />
        <span className="circle">
          <svg
            className="icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="square"></div>
        </span>
        <p className="title">Download</p>
        <p className="title">Open</p>
      </label>
    </div>
  );
};

export default AnimatedButton;
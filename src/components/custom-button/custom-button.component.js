import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div>
      <button
        type=""
        className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
export default CustomButton;

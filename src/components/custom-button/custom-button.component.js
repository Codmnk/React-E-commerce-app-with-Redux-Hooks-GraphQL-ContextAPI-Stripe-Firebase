import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, ...otherProps }) => {
  console.log(children);
  return (
    <div>
      <button type="" className="custom-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};
export default CustomButton;

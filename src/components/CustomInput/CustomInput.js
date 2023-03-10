import React from "react";
import "./CustomInput.css";

const CustomInput = ({ placeholder, handleChange, value, fieldName, type,className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e, fieldName)}
      value={value}
      className={className}
    />
  );
};

export default CustomInput;

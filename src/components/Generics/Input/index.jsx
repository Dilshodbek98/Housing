import React, { forwardRef } from "react";
import { Inp } from "./style";

const Input = forwardRef(
  (
    {
      margin,
      width,
      type,
      value,
      defaultValue,
      onChange,
      placeholder,
      name,
      icon,
    },
    ref
  ) => {
    return (
      <Inp
        ref={ref}
        icon={icon}
        width={width}
        type={type}
        value={value}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        margin={margin}
      />
    );
  }
);

export default Input;


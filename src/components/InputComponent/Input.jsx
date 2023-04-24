import React from "react";

const Input = ({ name, type }) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div className={`input-container ${focused ? "active" : ""}`}>
      <label for="name">{name}*</label>
      <input
        className="input-field-profile"
        type={type ? type : "text"}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

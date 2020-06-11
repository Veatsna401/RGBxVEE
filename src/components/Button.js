import React from 'react';

const Button = ({
  onClick,
  btnText
}) => {
  return (
    <div
      className="button"
      onClick={onClick}
    >
      {btnText}
    </div>
  );
};

export default Button;

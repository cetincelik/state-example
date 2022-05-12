import React from "react";
import PropTypes from "prop-types";
import "./Button.css"

const Button = ({ text, onClick }) => {
  return <button className="custom-button" onClick={onClick}>{text}</button>;
};

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "Tıkla",
};

export default Button;

import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

export default function Hint({ children, onClick }) {
  return ReactDom.createPortal(
    <div onClick={onClick}>{children}</div>,
    document.getElementById("root-hint")
  );
}

Hint.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

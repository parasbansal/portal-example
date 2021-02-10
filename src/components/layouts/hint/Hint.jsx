import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

export default function Hint({ children, onClick }) {
  const [hintRoot, setHintRoot] = useState(null);

  useEffect(() => {
    setHintRoot(document.getElementById("root-hint"));
  }, []);

  if (!hintRoot) return null;

  return ReactDom.createPortal(
    <div onClick={onClick}>{children}</div>,
    hintRoot
  );
}

Hint.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

function buttons(props) {
  return (
    <div>
      <buttons className="login">Login</buttons>
      <buttons className="signin">Sign In</buttons>
    </div>
  );
}

buttons.propTypes = {};

export default buttons;

import React from "react";
import style from "./Header.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

const Header = () => {
  return (
    <AppBar position="static" color="action" className={style.root}>
      <Toolbar>
        <Button
          aria-label="login"
          color="secondary"
          component={AdapterLink}
          to="/login"
          className={style.button}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

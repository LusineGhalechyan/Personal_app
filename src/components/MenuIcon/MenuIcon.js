import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import style from "./MenuIcon.module.css";
import { Link } from "react-router-dom";

class HamburgerMenu extends Component {
  state = { showMenu: false };

  onMenuOpen = () => {
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.onMenuClose);
    });
  };

  onMenuClose = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.onMenuClose);
    });
  };

  render() {
    return (
      <React.Fragment>
        <MenuIcon
          aria-label="menu"
          fontSize="large"
          color="secondary"
          onClick={this.onMenuOpen}
        />
        {this.state.showMenu && (
          <aside className={style.aside}>
            <div>
              <Link to="/profile">Profile</Link>
            </div>
            <div>
              <Link to="/qualifications">Qualifications</Link>
            </div>
            <div>
              <Link to="/experience">Experience</Link>
            </div>
            <div>
              <Link to="/info">Contact Info</Link>
            </div>
          </aside>
        )}
      </React.Fragment>
    );
  }
}

export default HamburgerMenu;

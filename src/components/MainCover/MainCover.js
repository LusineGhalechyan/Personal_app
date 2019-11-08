import React from "react";
import mainCover from "../../images/mainCover.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import style from "./MainCover.module.css";
import Button from "@material-ui/core/Button";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HamburgerMenu from "../MenuIcon/MenuIcon";

const MainCover = () => {
  return (
    <div>
      <img src={mainCover} alt="CoverPhoto" className={style.mainCover} />
      <div className={style.content}>Welcome to My Page </div>
      <BookmarkIcon aria-label="bookmark" className={style.bookmarkIcon} />
      <span className={style.hamburgerMenu}>
        <HamburgerMenu />
      </span>
      <img className={style.logo} src={logo} alt="logo" />
      <Link to="/profile">
        <div className={style.button}>
          <Button
            aria-label="finger-print"
            variant="outlined"
            color="secondary"
          >
            <FingerprintIcon className={style.fingerprintIcon} /> Get Started !
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default MainCover;

import React from "react";
import style from "./ContactInfo.module.css";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const ContactInfo = () => {
  return (
    <div className={style.mainBox}>
      <h5>Contact Info</h5>
      <br />
      <div className={style.pulse}>
        <CallIcon color="action" fontSize="sm" />
        <span className={style.span}></span>
      </div>
      <span>+374 93 416572</span>
      <div>
        <a href="mailto:yahoo@ghalechyan.com">
          <EmailIcon
            color="action"
            fontSize="sm"
            style={{ verticalAlign: "middle", margin: "5px" }}
          />
          <span> yahoo@ghalechyan.com</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

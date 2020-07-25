import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className={style.sidebar}>
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
    </React.Fragment>
  );
};

export default Sidebar;

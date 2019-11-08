import React from "react";
import style from "./MainPhoto.module.css";
import SJ from "../../images/SJ.png";

const MainPhoto = () => {
  return (
    <figure className={style.snip1477}>
      <img src={SJ} alt="Steve Jobs" />
      <div className={style.title}>
        <div>
          <h2>Steve</h2>
          <h4>Jobs</h4>
        </div>
      </div>
      <figcaption>
        <p>
          All I ask is that TODAY YOU do the BEST WORK of Your entire life .
        </p>
      </figcaption>
    </figure>
  );
};

export default MainPhoto;

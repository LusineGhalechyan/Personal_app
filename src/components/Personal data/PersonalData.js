import React from "react";
import style from "./PersonalData.module.css";
import LG from "../../images/LG.png";

const PersonalData = () => {
  return (
    <div className={style.container}>
      <img src={LG} width="12%" height="15%" alt="LucyG" />
      <div className={style.data}>
        <p>Lusine Ghalechyan</p>
        <div>Date of birth: 06.12.1983</div>
        <div>City: Nor Hachn</div>
        <div>Education: NPUA</div>
        <div>
          Web site:{" "}
          <a href="http://www.slideshare.net/lusine0707" target="_blank">
            http://www.slideshare.net/lusine0707,
          </a>
          <a href="https://github.com/LusineGhalechyan" target="_blank">
            {" "}
            https://github.com/LusineGhalechyan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;

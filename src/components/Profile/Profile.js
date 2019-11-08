import React from "react";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import MainPhoto from "../MainPhoto/MainPhoto";
import style from "./Profile.module.css";
import PersonalData from "../Personal data/PersonalData";

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <section className={style.content}>
        <div className={style.columns}>
          <main className={style.main}>
            <MainPhoto />
            <PersonalData />
          </main>
          <Sidebar />
        </div>
      </section>
    </div>
  );
};

export default Profile;

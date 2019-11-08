import React from "react";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import PersonalData from "../Personal data/PersonalData";
import MainPhoto from "../Main Photo/Main Photo";
import style from "./Profile.module.css";

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

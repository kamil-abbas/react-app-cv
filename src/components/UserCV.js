import React from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import "./UserCV.css";

export default function UserCV() {
  return (
    <div className="user-cv">
      <div className="personal-info">
        <PersonalInfo />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div className="contacts">
        <Contacts />
      </div>
    </div>
  );
}

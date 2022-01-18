import React from "react";
import fathi from "../assets/22.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <h2 className="title">HOWAMI</h2>
        <div className="header-container">
          <div className="job-container">
            <h3 className="text-center">I'm Web Developer</h3>
            <p>
              I'm Fathi Abdelmalek, full stack developer with (Django, Django
              Rest Framework, React, Redux, Postgresql). I use (<b>html</b>,{" "}
              <b>sass</b> as a pre prosessor to <b>css</b>, <b>jquery</b>,{" "}
              <b>react</b> and <b>redux</b>) for frontend, while use (
              <b>django</b>, <b>django-rest-framework</b>, <b>django-filters</b>
              ) for backend, and postgresql as dbms (database management
              system).
            </p>
          </div>
          <div className="image-container">
            <img src={fathi}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

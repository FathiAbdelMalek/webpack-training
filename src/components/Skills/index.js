import React from "react";
import Skill from "./skill";

export default function () {
  let skills = [
    {
      name: "HTML",
      val: 90,
    },
    {
      name: "CSS",
      val: 65,
    },
    {
      name: "JS",
      val: 70,
    },
    {
      name: "Python",
      val: 85,
    },
    {
      name: "PostgreSQL",
      val: 80,
    },
    {
      name: "React",
      val: 70,
    },
    {
      name: "Redux",
      val: 65,
    },
    {
      name: "Django",
      val: 75,
    },
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <ul>
          {skills.map((e, i) => {
            return <Skill key={i} skill={e.name} val={e.val} />;
          })}
        </ul>
      </div>
    </div>
  );
}

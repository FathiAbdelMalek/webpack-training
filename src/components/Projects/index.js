import React from "react";
import Project from "./Project";

export default function Projects() {
  let projects = ["MemoirProjet", "MyWebSite", "Test Project"];
  return (
    <div className="projects">
      <div className="container">
        <h2 className="title">My Projects</h2>
        <div className="projects-container">
          {projects.map((e, i) => {
            return <Project key={i} title={e} />;
          })}
        </div>
      </div>
    </div>
  );
}

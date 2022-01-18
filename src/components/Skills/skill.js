import React from "react";

export default function Skill(props) {
  const style = {
    // width: `${props.val}%`,
    width: "0",
  };

  return (
    <li>
      <div className="skill-container">
        <h3>{props.skill}</h3>
        <div className="skill" data-val={`${props.val}%`}>
          <span
            ref={(e) => {
              window.onscroll = () => {
                if (window.scrollY >= e.getBoundingClientRect().top + 250) {
                  e.style.width = `${props.val}%`;
                }
              };
            }}
            style={style}
          />
        </div>
      </div>
    </li>
  );
}

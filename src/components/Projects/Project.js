import React from "react";
import img from "../../assets/image.jpeg";

export default function Project(props) {
  const style = {
    width: "18rem",
  };
  return (
    <div className="card" style={style}>
      <img className="card-img-top" src={img} height={"250"} />
      <a href="#">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </a>
    </div>
  );
}

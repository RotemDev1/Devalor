import React from "react";
// import { Link } from "react-router-dom"

export function CoursePreview(props) {
 
  const { language, img } = props.course;

  return (
    <div className="course-preview">
      <div className="card-course flex column justify-center align-center">
        <img src={img} />
        <h2>{language}</h2>
      </div>
    </div>
  );
}

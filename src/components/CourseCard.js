import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <article className="course-card">

      <div className="course-image-wrapper">

        <img
          src={course.image}
          alt={course.name}
          className="course-image"
        />

        <span className="course-level">
          {course.level}
        </span>

      </div>


      <div className="course-card-content">

        <div className="course-meta">
          <span>◷ {course.duration}</span>
          <span>● {course.level}</span>
        </div>


        <h3>{course.name}</h3>


        <p>
          {course.description}
        </p>


        <div className="course-card-bottom">

          <span className="course-category">
            Professional Course
          </span>

          <button
            className="course-details-btn"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            View Details →
          </button>

        </div>

      </div>

    </article>
  );
}

export default CourseCard;
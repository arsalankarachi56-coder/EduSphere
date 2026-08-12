import React from "react";
import { useNavigate } from "react-router-dom";
import "./InstructorCard.css";

function InstructorCard({ instructor }) {
  const navigate = useNavigate();

  return (
    <article className="instructor-card">

      <div className="instructor-image-wrapper">

        <img
          src={instructor.image}
          alt={instructor.name}
          className="instructor-image"
        />

        <span className="instructor-experience">
          {instructor.experience}
        </span>

      </div>


      <div className="instructor-card-content">

        <span className="instructor-designation">
          {instructor.designation}
        </span>

        <h3>{instructor.name}</h3>

        <p>
          {instructor.expertise}
        </p>


        <button
          className="instructor-details-btn"
          onClick={() =>
            navigate(`/instructors/${instructor.id}`)
          }
        >
          View Profile →
        </button>

      </div>

    </article>
  );
}

export default InstructorCard;
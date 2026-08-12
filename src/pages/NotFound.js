import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">

      <div className="not-found-content">

        <span className="not-found-number">
          404
        </span>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you're looking for doesn't exist or may
          have been moved to another location.
        </p>

        <div className="not-found-buttons">

          <button
            className="not-found-home"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>

          <button
            className="not-found-courses"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </button>

        </div>

      </div>

    </div>
  );
}

export default NotFound;
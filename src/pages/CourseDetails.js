import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/data";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) {
    return (
      <div className="course-not-found">
        <h1>Course Not Found</h1>
        <p>
          Sorry, the course you are looking for does not exist.
        </p>

        <button onClick={() => navigate("/courses")}>
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="course-details-page">

      {/* Hero */}
      <section className="course-details-hero">

        <div className="course-details-container">

          <button
            className="back-courses-btn"
            onClick={() => navigate("/courses")}
          >
            ← All Courses
          </button>

          <div className="course-details-hero-grid">

            <div className="course-details-image">
              <img
                src={course.image}
                alt={course.name}
              />

              <span>{course.level}</span>
            </div>


            <div className="course-details-intro">

              <span className="details-label">
                PROFESSIONAL COURSE
              </span>

              <h1>{course.name}</h1>

              <p>
                {course.description}
              </p>

              <div className="course-info-row">

                <div>
                  <small>Duration</small>
                  <strong>{course.duration}</strong>
                </div>

                <div>
                  <small>Level</small>
                  <strong>{course.level}</strong>
                </div>

                <div>
                  <small>Instructor</small>
                  <strong>{course.instructor}</strong>
                </div>

              </div>

              <button
                className="enroll-btn"
                onClick={() => navigate("/contact")}
              >
                Enroll Now →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* Course Information */}
      <section className="course-information">

        <div className="course-information-container">

          <div className="course-description">

            <span className="details-label">
              COURSE OVERVIEW
            </span>

            <h2>
              Build Skills That
              <span> Matter.</span>
            </h2>

            <p>
              This course is designed to give you practical,
              industry-focused knowledge. You will learn through
              real-world projects, hands-on exercises and guided
              training.
            </p>

            <p>
              Whether you're starting your journey or improving
              your existing skills, this program will help you
              develop confidence and prepare for real professional
              opportunities.
            </p>

          </div>


          <div className="course-features">

            <span className="details-label">
              WHAT YOU'LL LEARN
            </span>

            <h2>
              Course Features
            </h2>

            <div className="features-list">

              <div className="feature-item">
                <span>✓</span>
                <p>Practical hands-on projects</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Industry-focused curriculum</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Expert instructor guidance</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Real-world assignments</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Career-focused learning</p>
              </div>

              <div className="feature-item">
                <span>✓</span>
                <p>Certificate after completion</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CourseDetails;
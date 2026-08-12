import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instructors } from "../data/data";
import "./InstructorDetails.css";

function InstructorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const instructor = instructors.find(
    (item) => String(item.id) === String(id)
  );

  if (!instructor) {
    return (
      <div className="instructor-not-found">
        <h1>Instructor Not Found</h1>
        <p>
          Sorry, the instructor you are looking for does not exist.
        </p>

        <button onClick={() => navigate("/instructors")}>
          ← Back to Instructors
        </button>
      </div>
    );
  }

  return (
    <div className="instructor-details-page">

      {/* Hero */}
      <section className="instructor-details-hero">

        <div className="instructor-details-container">

          <button
            className="back-instructors-btn"
            onClick={() => navigate("/instructors")}
          >
            ← All Instructors
          </button>

          <div className="instructor-details-grid">

            {/* Image */}
            <div className="instructor-details-image">
              <img
                src={instructor.image}
                alt={instructor.name}
              />
            </div>


            {/* Information */}
            <div className="instructor-details-content">

              <span className="instructor-details-label">
                OUR EXPERT INSTRUCTOR
              </span>

              <h1>{instructor.name}</h1>

              <h3>{instructor.designation}</h3>

              <p>
                {instructor.expertise}
              </p>

              <div className="instructor-stats">

                <div>
                  <span>Experience</span>
                  <strong>{instructor.experience}</strong>
                </div>

                <div>
                  <span>Expertise</span>
                  <strong>{instructor.expertise}</strong>
                </div>

              </div>

              <button
                className="contact-instructor-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* About Instructor */}
      <section className="instructor-about">

        <div className="instructor-about-container">

          <div className="instructor-about-heading">

            <span className="instructor-details-label">
              PROFESSIONAL PROFILE
            </span>

            <h2>
              Learn From
              <span> Experienced Experts.</span>
            </h2>

          </div>

          <div className="instructor-about-text">

            <p>
              Our instructors bring practical industry experience
              and a passion for teaching. They focus on helping
              students understand concepts through real projects
              and practical learning.
            </p>

            <p>
              With expert guidance and a career-focused approach,
              students can build the confidence and skills needed
              to succeed in today's digital world.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default InstructorDetails;
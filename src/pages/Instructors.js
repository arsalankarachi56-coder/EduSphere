import React from "react";
import { instructors } from "../data/data";
import InstructorCard from "../components/InstructorCard";
import Footer from "../components/Footer";
import "./Instructors.css";

function Instructors() {
  return (
    <div className="instructors-page">

      {/* Hero */}
      <section className="instructors-hero">
        <div className="instructors-hero-content">

          <span className="instructors-label">
            OUR INSTRUCTORS
          </span>

          <h1>
            Learn From
            <span> Industry Experts.</span>
          </h1>

          <p>
            Meet our experienced instructors who bring practical
            knowledge, industry experience, and passion for teaching.
          </p>

        </div>
      </section>


      {/* Instructors */}
      <section className="all-instructors">

        <div className="instructors-heading">

          <span className="instructors-label">
            MEET THE TEAM
          </span>

          <h2>
            Experts Behind Your
            <span> Learning Journey</span>
          </h2>

          <p>
            Learn from professionals who are passionate about helping
            students develop real-world skills.
          </p>

        </div>


        <div className="instructors-grid">

          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Instructors;
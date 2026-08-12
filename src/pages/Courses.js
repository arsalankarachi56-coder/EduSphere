import React from "react";
import { courses } from "../data/data";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import "./Courses.css";

function Courses() {
  return (
    <div className="courses-page">

      {/* Courses Hero */}
      <section className="courses-hero">
        <div className="courses-hero-content">

          <span className="courses-label">
            OUR COURSES
          </span>

          <h1>
            Learn Skills That
            <span> Shape Your Future.</span>
          </h1>

          <p>
            Explore professional courses designed to help you build
            practical skills and prepare for today's digital world.
          </p>

        </div>
      </section>


      {/* Courses Section */}
      <section className="all-courses">

        <div className="courses-heading">

          <span className="courses-label">
            EXPLORE PROGRAMS
          </span>

          <h2>
            Choose Your
            <span> Learning Path</span>
          </h2>

          <p>
            Choose from our professional training programs and start
            developing skills that can make a difference in your career.
          </p>

        </div>


        <div className="all-courses-grid">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Courses;
import React from "react";
import "./About.css";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">

          <div className="about-label">
            ABOUT EDUSPHERE
          </div>

          <h1>
            We Help You
            <span> Build Your Future.</span>
          </h1>

          <p>
            EduSphere is a professional training institute focused on
            practical skills, modern technology, and career development.
          </p>

        </div>
      </section>


      {/* About Institute */}
      <section className="about-intro">

        <div className="about-intro-image">

          <div className="about-image-box">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="Students learning"
            />
          </div>

          <div className="about-experience">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

        </div>


        <div className="about-intro-content">

          <div className="section-label">
            ABOUT OUR INSTITUTE
          </div>

          <h2>
            Education That
            <span> Creates Opportunities.</span>
          </h2>

          <p>
            EduSphere provides professional training programs designed
            for students who want to develop practical and career-ready
            skills.
          </p>

          <p>
            Our learning environment combines experienced instructors,
            modern teaching methods, and practical projects to help
            students become confident professionals.
          </p>

        </div>

      </section>


      {/* Mission & Vision */}
      <section className="mission-vision">

        <div className="mission-heading">

          <div className="section-label">
            OUR PURPOSE
          </div>

          <h2>
            Mission &
            <span> Vision</span>
          </h2>

          <p>
            We believe quality education can create better opportunities
            and a stronger future.
          </p>

        </div>


        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              🎯
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide accessible, practical, and high-quality training
              that helps students develop valuable professional skills.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-icon">
              🚀
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted learning institute where students can
              discover their potential and prepare for successful careers.
            </p>

          </div>

        </div>

      </section>


      {/* Why Students Choose Us */}
      <section className="student-choice">

        <div className="student-choice-heading">

          <div className="section-label">
            WHY STUDENTS CHOOSE US
          </div>

          <h2>
            Learning Designed
            <span> For Success.</span>
          </h2>

          <p>
            Everything we do is focused on helping students learn,
            practice, and grow.
          </p>

        </div>


        <div className="choice-grid">

          <div className="choice-card">

            <div className="choice-icon">
              ✓
            </div>

            <h3>Practical Training</h3>

            <p>
              Work on practical exercises and real-world projects
              instead of only learning theory.
            </p>

          </div>


          <div className="choice-card">

            <div className="choice-icon">
              ★
            </div>

            <h3>Expert Instructors</h3>

            <p>
              Learn from experienced instructors who understand
              modern industry requirements.
            </p>

          </div>


          <div className="choice-card">

            <div className="choice-icon">
              ◆
            </div>

            <h3>Career Focused</h3>

            <p>
              Develop skills that can help you move confidently
              toward your professional goals.
            </p>

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="about-stats">

        <div className="stat-item">
          <strong>5K+</strong>
          <span>Students</span>
        </div>

        <div className="stat-item">
          <strong>25+</strong>
          <span>Courses</span>
        </div>

        <div className="stat-item">
          <strong>30+</strong>
          <span>Instructors</span>
        </div>

        <div className="stat-item">
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

      </section>


      <Footer />

    </div>
  );
}

export default About;
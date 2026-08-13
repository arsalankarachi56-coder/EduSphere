import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";
import { courses } from "../data/data";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <>
      {/* =========================
          HERO SECTION
      ========================= */}

      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <p className="hero-tag">LEARN • BUILD • GROW</p>

            <h1>
              Build Your Future
              <span> With The Right Skills.</span>
            </h1>

            <p className="hero-text">
              Learn modern technology and professional skills from experienced
              instructors through practical, career-focused training.
            </p>

            <div className="hero-buttons">
              <Link to="/courses" className="primary-btn">
                Explore Courses
              </Link>

              <Link to="/about" className="secondary-btn">
                Discover More
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle"></div>

            <div className="hero-card card-one">
              <strong>50+</strong>
              <span>Expert Lessons</span>
            </div>

            <div className="hero-card card-two">
              <strong>98%</strong>
              <span>Student Satisfaction</span>
            </div>

            <div className="hero-icon">🎓</div>
          </div>
        </section>
      </main>

      {/* =========================
          FEATURED COURSES
      ========================= */}

      <section className="featured-courses">
        <div className="section-heading">
          <p>OUR POPULAR COURSES</p>

          <h2>
            Learn Skills That
            <span> Build Your Future.</span>
          </h2>

          <p>
            Explore our most popular professional courses designed to help you
            learn practical and career-ready skills.
          </p>
        </div>

        <div className="courses-grid">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="why-us">
        <div className="why-content">
          <div className="section-label">WHY CHOOSE US</div>

          <h2>
            Learn From People Who
            <span> Know What Matters.</span>
          </h2>

          <p>
            We focus on practical learning, experienced instructors, and
            real-world projects so students can build skills they can actually
            use.
          </p>

          <div className="why-features">
            <div className="why-item">
              <div className="why-icon">✓</div>

              <div>
                <h3>Practical Learning</h3>
                <p>
                  Learn through real projects and practical exercises.
                </p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">★</div>

              <div>
                <h3>Expert Instructors</h3>
                <p>
                  Learn from experienced professionals and mentors.
                </p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">◆</div>

              <div>
                <h3>Career Focused</h3>
                <p>
                  Develop skills that prepare you for real-world careers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-visual">
          <div className="why-main-card">
            <div className="why-card-icon">🎓</div>

            <h3>Learn With Confidence</h3>

            <p>
              Build knowledge, confidence and practical experience through a
              modern learning environment.
            </p>
          </div>

          <div className="why-small-card">
            <strong>100%</strong>
            <span>Practical Approach</span>
          </div>
        </div>
      </section>

      {/* =========================
          CTA SECTION
      ========================= */}

      <section className="home-cta">
        <div className="cta-content">
          <p className="cta-label">START YOUR JOURNEY</p>

          <h2>
            Ready to Build Your
            <span> Future?</span>
          </h2>

          <p>
            Join our professional training programs and start learning the
            skills you need for your future career.
          </p>

          <Link to="/courses" className="cta-button">
            Explore Courses
            <span>→</span>
          </Link>
        </div>

        <div className="cta-decoration">
          <div className="cta-circle circle-one"></div>
          <div className="cta-circle circle-two"></div>
          <div className="cta-dot dot-one"></div>
          <div className="cta-dot dot-two"></div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
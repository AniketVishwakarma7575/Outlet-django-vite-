import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About DevOutlet</h1>
        <p>
          Welcome to <strong>DevOutlet</strong> — your one-stop shop for all things
          tech, code, and creativity. We’re a passionate team of developers, designers,
          and problem-solvers who believe in building innovative tools for a better web.
        </p>

        <p>
          Our mission is simple: make high-quality, developer-friendly products that
          save time and spark inspiration. From frontend frameworks to backend solutions,
          we’ve got you covered.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>⚡ Cutting-edge web & app development</li>
          <li>🎨 UI/UX design with attention to detail</li>
          <li>🛠 Developer tools & open-source projects</li>
          <li>📚 Tutorials, tips, and guides for learners</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          At DevOutlet, we value quality, transparency, and community.
          Every product we make is tested by developers, for developers.
          We believe in sharing knowledge and helping you grow.
        </p>
      </div>
    </div>
  );
};

export default About;

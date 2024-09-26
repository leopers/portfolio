import React from "react";
import "./About.css";
import myPhoto from "../assets/images/myPhoto.jpg";

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Leonardo Dias, a passionate Computer Engineering student at
            the&nbsp;
            <strong>Aeronautics Institute of Technology</strong> (ITA) with a
            deep interest in developing innovative technologies and promoting
            education.
          </p>
          <p>
            Currently, I'm a researcher at ITA’s Data Science Research Group,
            working on a Bayesian Analysis Evaluation tool. I'm also involved in
            teaching roles and leadership positions, having served as a TA for
            both&nbsp;
            <strong>Electricity and Magnetism</strong> and&nbsp;
            <strong>Data Structures and Algorithms</strong>. Additionally, I led
            the&nbsp;
            <strong>eVTOL Drones Team</strong>, working on autonomous drone
            algorithms.
          </p>
          <p>
            Outside of academics, I enjoy exploring technology, mathematics,
            playing guitar, and engaging in sports like judo and soccer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

/*
// Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from 'react';
import './About.css'; 
import myPhoto from './assets/profile.jpg'; 

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src={myPhoto} alt="Jorlin Roy" className="profile-picture" />
        <h1>About Me</h1>
        <p>Passionate Web Developer | Software Engineer in Training | Game Designer </p>
      </header>

      <section className="about-intro">
        <h2>Introduction</h2>
        <p>
          I'm Jorlin Roy, a dedicated web developer with a strong foundation in both front-end and back-end technologies. 
          I love creating intuitive and dynamic user experiences, and I'm constantly learning to enhance my skills.
        </p>
      </section>

      <section className="about-skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Express, MongoDB</li>
          <li>Git, GitHub</li>
          <li>Responsive Design</li>
          <li>Blender Software</li>
          <li> Unity Software</li>
          <li> Figma</li>
        </ul>
      </section>

      <section className="about-interests">
        <h2>Interests</h2>
        <p>
          In my free time, I enjoy exploring new technologies, contributing to open-source projects, and honing my skills through personal projects.
          I also love to read tech blogs and participate in coding challenges to stay sharp.
        </p>
      </section>
    </div>
  );
}

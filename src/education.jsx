/*
// Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from 'react';
import './Education.css'; 

export default function Education() {
  return (
    <div className="education-container">
      <header className="education-header">
        <h1>Education & Qualifications</h1>
      </header>

      <section className="education-overview">
        <h2>Current Studies</h2>
        <p>
          I am currently a Game Development student at Centennial College, where I am refining my coding skills and learning various aspects of game design.
        </p>
      </section>

      <section className="education-qualifications">
        <h2>Qualifications</h2>
        <ul className="qualifications-list">
          <li>Strong understanding of C#, HTML, CSS, and Java.</li>
          <li>Completed a 6-month course in Advanced C++ in India.</li>
          <li>Proficient in Blender software for 3D modeling and animation.</li>
          <li>Experience with GIMP for graphics editing.</li>
          <li>Familiar with game engines such as Unity.</li>
          <li>Knowledge of data structures and algorithms in Python.</li>
          <li>Excellent understanding of statistics and advanced mathematics.</li>
          <li>Proficient in web development using React and Node.js.</li>
          <li>Familiar with MongoDB for database management.</li>
          <li>Skilled in front-end development, creating responsive and user-friendly interfaces.</li>
        </ul>
      </section>
    </div>
  );
}

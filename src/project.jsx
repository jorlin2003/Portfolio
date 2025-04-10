/* Student Name: Jorlin Roy
// Student ID: 301240499
 Date: 7 OCT 2024*/
import React from "react";
import './project.css';

export default function Project() {
  const openPDF = () => {
    window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:326e4e1e-46a6-4519-92a0-14d1217db803", "_blank");
  };

  const openMoodyPDF = () => {
    window.open("https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:95a9675d-24de-4e77-a141-1cc7a2f590c6", "_blank");
  };

  return (
    <>
      <h2>My Projects</h2>

      <div className="project-section">
        <h3>Project 1: Death to Deathless</h3>
        <p>
          "Death to Deathless" is an action-adventure game set in a haunted
          vampire castle. Players control Hansel, a supernatural hunter, as he
          battles undead monsters, solves puzzles, and explores eerie locations
          to rescue his sister, Gretel. The game features top-down isometric
          gameplay with combat, stealth, and puzzle-solving mechanics.
        </p>
        <button onClick={openPDF}>View Game Design Document (PDF)</button>
      </div>

      <div className="project-section">
        <h3>Project 2: MOODY App</h3>
        <p>
          The purpose of the MOODY app is to address the challenges and pain points faced by individuals dealing with mental health issues. Key focus areas include limited access to mental health resources, face-to-face barriers, fear of taking the first step, stigma around mental health, and lack of easy access to treatments. 
          MOODY aims to provide a 24/7 accessible solution offering personalized assistance, connections to mental health professionals, and a variety of treatments. The app seeks to eliminate the stigma associated with mental health and make resources easily available to users, promoting overall mental well-being.
        </p>
        <button onClick={openMoodyPDF}>View Software Requirements Specification Document (PDF)</button>
      </div>
    </>
  );
}

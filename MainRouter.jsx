import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";  // Adjusted path for Home component
import About from './src/about';           // Assuming About, Education, etc., are in src
import Education from './src/education';
import Project from './src/project';  
import Contact from './src/contact';  
import Layout from './components/Layout';  // Assuming Layout is also in src or components

const MainRouter = () => {
  return (
    <>
      <Layout />  {/* Render the layout with the navigation bar */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRouter;

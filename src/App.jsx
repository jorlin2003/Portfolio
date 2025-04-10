/*
// Student Name: Jorlin Roy
// Student ID: 301240499
// Date: 7 OCT 2024
*/

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter'; // Assuming your main routing logic is here

const App = () => {
  return (
    <Router basename="/Portfolio"> {/* Make sure to use basename with your repo name */}
      <MainRouter />
    </Router>
  );
};

export default App;

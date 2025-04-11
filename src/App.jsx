/*
// Student Name: Jorlin Roy
// Student ID: 301240499
// Date: 7 OCT 2024
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

const App = () => {
  return (
    <Router basename="/Portfolio">
      <MainRouter />
    </Router>
  );
};

export default App;

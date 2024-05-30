import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFoundText from './components/NotFoundText';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:id" element={<MovieDetails/>} />
        <Route component={<NotFoundText/>} />
      </Routes>
    </Router>
  );
}

export default App;

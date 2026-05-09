import { Routes, Route, Link } from 'react-router-dom'
import "./App.css"
import Home from './Pages/home.jsx'
import Rick from './Pages/rickandmory.jsx'
import Quiz from './Pages/Quiz.jsx'
import { useEffect, useState } from "react";

function App() {
  return (
    <div className='app'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rickandmortyapi">Rick and Morty</Link>
        <Link to="/Quiz">Quiz</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rickandmortyapi" element={<Rick />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App;
import { useState } from 'react'
import './App.css'
import Home from './components/home'
import NavBar from './components/navbar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App

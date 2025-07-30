import { useState } from 'react'
import './App.css'
import Home from './components/home'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Home />
      <navbar />
    </div>
  );
}

export default App

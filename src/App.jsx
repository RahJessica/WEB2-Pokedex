import { useState } from 'react'
import './App.css'
import Home from './components/home'
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="min-h-screen">
      <SearchBar />
      <Home />
    </div>
  );
}

export default App

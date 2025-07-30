import { useState } from 'react'
import './App.css'
import Home from './components/home'
import NavBar from './components/navbar';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar/>
      <SearchBar />
      <Home />
    </div>
  );
}

export default App

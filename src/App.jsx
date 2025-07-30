import { useState } from 'react'
import './App.css'
import Home from './components/home'
import SearchBar from './components/searchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Home searchTerm={searchTerm} />
    </div>
  );
}

export default App

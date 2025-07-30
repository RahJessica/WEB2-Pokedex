import { useState } from 'react'
import './App.css'
import Home from './components/home'
import NavBar from './components/navbar';
import SearchBar from './components/searchBar';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="min-h-screen">
      <NavBar/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Home searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
}

export default App

import './App.css';
import Home from './Home';
import Verify from './Verify';
import Admin from './Admin';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/verify" element={<Verify />} />
    <Route path="/admin" element={<Admin />} />
    </Routes>
      
    </>
  );


}

export default App;

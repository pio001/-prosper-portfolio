
import './App.css';
import About from './page/About';
import Contact from './page/Contact'
import Home from './page/Home';
import { Route, Routes } from 'react-router-dom';
import Project from './page/Project';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div> 
      <Routes>
        
        <Route path="Navbar" element={<Navbar/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="Footer" element={<Footer/>}/>
        
      </Routes>

      
    </div>
  );
}

export default App;

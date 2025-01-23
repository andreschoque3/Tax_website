import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

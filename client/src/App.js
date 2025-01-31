import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Truckers from './Pages/Truckers/Truckers';
import Resources from './Pages/Resources/Resources';
import Jobs from './Pages/Jobs/Jobs';
import Contact from './Pages/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Truckers' element={<Truckers/>}/>
      <Route path='/Resources' element={<Resources/>}/>
      <Route path='/Careers' element={<Jobs/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

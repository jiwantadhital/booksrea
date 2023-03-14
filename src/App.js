import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
// import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import AllNovels from './routes/AllNovels';
import Details from './details/Details';
import Read from './details/Read';

function App() {
  return (
    <>
          <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/all' element={<AllNovels/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>

</>
   
  );
}

export default App;

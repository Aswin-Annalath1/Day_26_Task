import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MovieSection from './Components/MovieSection';
import MovieSectionM from './Components/MovieSectionM';
import MovieSectionT from './Components/MovieSectionT';
import MovieSectionH from './Components/MovieSectionH';
import NavbarMUI from './Components/NavbarMUI';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    {/* <NavbarMUI/> */}
    <hr className='middle'></hr>

    <Routes>

    <Route path='/' element={<MovieSection />}/>

    <Route path='/malayalam' element={<MovieSectionM />}/>

    <Route path='/tamil' element={<MovieSectionT />}/>

    <Route path='/hindi' element={<MovieSectionH />}/>

    </Routes>
    
    </>
  );
}

export default App;

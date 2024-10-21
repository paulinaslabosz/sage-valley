import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';
import Contact from './pages/Contact.js';
import BigCabin from './pages/BigCabin.js';
// import LittleCabin from './pages/LittleCabin.js';
import Attractions from './pages//attractions/Attractions.js';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav>
          <Nav />
        </nav>

        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/:id' element={<BigCabin />} />
            {/* <Route path='littleCabin' element={<LittleCabin />} /> */}
            <Route path='attractions/*' element={<Attractions />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

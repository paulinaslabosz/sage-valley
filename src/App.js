import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';
import Contact from './pages/Contact.js';
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
            <Route path='bigCabin' element={<Homepage />} />
            <Route path='littleCabin' element={<Homepage />} />
            <Route path='attractions' element={<Homepage />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

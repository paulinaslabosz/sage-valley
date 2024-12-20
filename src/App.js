import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';
import Contact from './pages/Contact.js';
import Cabin from './pages/Cabin/Cabin.js';
import Attractions from './pages//attractions/Attractions.js';
import Footer from './layout/Footer.js';
import ScrollToTop from './layout/ScrollToTop.js';
function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <ScrollToTop />
      <nav>
        <Nav />
      </nav>

      <main>
        <TransitionGroup>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/:id' element={<Cabin location={location} />} />
            <Route path='/attractions/*' element={<Attractions />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </TransitionGroup>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

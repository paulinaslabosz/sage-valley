import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';
import Contact from './pages/Contact.js';
import Cabin from './pages/Cabin.js';
import Attractions from './pages//attractions/Attractions.js';
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <nav>
        <Nav />
      </nav>

      <main>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={2000}>
            <Routes location={location}>
              <Route path='/' element={<Homepage />} />
              <Route path='/:id' element={<Cabin />} />
              <Route path='attractions/*' element={<Attractions />} />
              <Route path='contact' element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

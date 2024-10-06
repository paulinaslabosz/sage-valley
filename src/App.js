import './App.css';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';
import Contact from './pages/Contact.js';
function App() {
  return (
    <div className='App'>
      <nav>
        <Nav />
      </nav>

      <main>
        <Homepage />
        {/* <Contact /> */}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

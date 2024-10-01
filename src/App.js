import './App.css';
import Nav from './layout/Nav';
import Homepage from './pages/homepage/Homepage.js';

function App() {
  return (
    <div className='App'>
      <nav>
        <Nav />
      </nav>

      <main>
        <Homepage />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;

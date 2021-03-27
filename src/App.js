import logo from './logo.svg';
import './App.css';
import rickface from './rickastley.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rickface} className="App-rick" alt="rickface" />
        <p>
          Never gonna give you up!
        </p>
        <p>
          Never gonna let you down!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for true art
        </a>
      </header>
    </div>
  );
}

export default App;

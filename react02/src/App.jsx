import './App.css';
import side from './assets/side.png';

function App() {
  return (
    <div className="page-shell">
      <header className="navbar">
        <div className="logo">Frontend Practice</div>
        <nav className="navlinks">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">FAQ</a>
        </nav>
      </header>

      <main className="hero">
        <div className="text-section">
          <h1>Become a better frontend developer.</h1>
          <p className="hero-copy">
            Take your frontend skills to the next level by recreating <strong>real websites</strong> from <strong>real companies</strong>.
            <span>The perfect type of practice for developers of all skill levels. Are you up for the challenge?</span>
          </p>

          <div className="hero-btns">
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="img-section">
          <img src={side} alt="Frontend practice preview" className="hero-image" />
        </div>
      </main>
    </div>
  );
}

export default App;

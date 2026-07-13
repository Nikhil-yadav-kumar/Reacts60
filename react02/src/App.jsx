import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
     <Navbar />
     <Hero />
     <Footer />
    </div>
  );
}

export default App;

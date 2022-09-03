import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import Services from './components/Services'
import Clients from './components/Clients'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Home />
        <About />
        <Activities />
        <Services />
        <Clients />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;

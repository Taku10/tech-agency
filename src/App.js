import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import Services from './components/Services'
import Clients from './components/Clients'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

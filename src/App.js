import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,  
  Routes,  
  Route,  
  Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router</h1>
     <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/">About</Link>{' '}
      <Link to="/">Contact</Link>{' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

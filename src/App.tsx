import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/navbar';
import Landing from './pages/landing';
import About from './pages/about';
import Subscriptions from './pages/subscriptions';
import Contact from './pages/contact';
import TS from './pages/TS';
import './styles/scroll.css'


function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TS" element={<TS />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Aboutme from './pages/Aboutme';

function App() {
  return (
    <div>
      <Header />
      <Nav />

    <div>
      <Routes>
        <Route path="*" element={<Aboutme />} />
        {/*<Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
  <Route path="/resume" element={<Resume />} />*/}
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;

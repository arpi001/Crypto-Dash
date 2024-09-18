
import CoinContextProvider from './context/CoinContext';  // Import without curly braces for default export
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Crypto from './crypto/Crypto';
import Features from './features/Features';
import Blogs from './blogs/Blogs';


const App = () => {
  return (
    <CoinContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </CoinContextProvider>
  );
};

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import List from './components/list';
import Forus from './components/forus';
import FAQSection from './components/faq';
import Featuredspine from './components/featuredspine';
import Features from './components/features';
import Footer from './components/footer';

AOS.init({
  duration: 1000,
});
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
          <Route path="/featuredspine" element={<Featuredspine />} />
          <Route path="/forus" element={<Forus />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQSection />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

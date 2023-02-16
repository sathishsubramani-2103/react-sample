import "./App.css";
import Header from "./component/header/Header";
import {BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom';
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Vehicles from "./component/pages/Vehicles";
import Contact from "./component/pages/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
    <>
      <Router>
        <Header />
        <div className="pages">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vehicles" element={<Vehicles />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
      </Router>
    </>
    <>
    <Footer />
    </>
    </>
  );
}

export default App;

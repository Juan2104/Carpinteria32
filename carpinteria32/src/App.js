import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavigationBar from './Components/NavigationBar'
import Home from "./Components/Home";
import Servicios from "./Components/Servicios";
import Galeria from "./Components/Galeria";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path='/' caseSensitive={false} element={<Home />} />
          <Route exact path='/Home' caseSensitive={false} element={<Home />} />
          <Route exact path='/Servicios' caseSensitive={false} element={<Servicios />} />
          <Route exact path='/Galeria' caseSensitive={false} element={<Galeria />} />
          <Route exact path='/Contacto' caseSensitive={false} element={<Contacto />} />
          
        </Routes>
      </div>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;

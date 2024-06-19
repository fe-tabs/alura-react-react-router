import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/Menu";
import Home from "pages/Home";
import AboutMe from "pages/AboutMe";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

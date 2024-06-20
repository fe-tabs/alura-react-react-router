import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/Menu";
import Home from "pages/Home";
import AboutMe from "pages/AboutMe";
import PageContent from "components/PageContent";
import Post from "pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<PageContent/>}>
          <Route path="" element={<Home/>} />
          <Route path="posts/:id" element={<Post/>} />
          <Route path="about-me" element={<AboutMe/>} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

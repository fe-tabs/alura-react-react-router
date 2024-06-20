import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/Menu";
import Home from "pages/Home";
import AboutMe from "pages/AboutMe";
import PageContent from "components/PageContent";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      
      <Routes>
        <Route path="/" element={<PageContent/>}>
          <Route path="" element={<Home/>} />
          <Route path="about-me" element={<AboutMe/>} />
        </Route>
        <Route path="posts/:id" element={<Post/>} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Gallery from "./components/gallery/Gallery";
import SideMenu from "./components/sideMenu/SideMenu";
import About from "./components/about/About";

//Styles
import "./core-ui/index.css";

const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/travel-with-sujeet/gallery" element={<Gallery />} />
        <Route path="/travel-with-sujeet/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

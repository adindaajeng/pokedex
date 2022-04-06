import "bootstrap/dist/css/bootstrap.css";
import "./Stylesheet/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import NavHeader from "./Components/NavHeader";
import Favorite from "./Pages/Favorite";
import Catched from "./Pages/Catched";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route element={<Detail />} path="/detail/:id" />
        <Route element={<Favorite />} path="/favorite" />
        <Route element={<Catched />} path="/catched" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

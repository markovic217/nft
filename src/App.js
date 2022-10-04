import "./App.css";
import Header from "./components/header.js";
import Body from "./components/body.js";
import Market from "./components/market.js";
import Create from "./components/create.js";
import About from "./components/about.js";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Body />}></Route>
        <Route path="/market" element={<Market />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;

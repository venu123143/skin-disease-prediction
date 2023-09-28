import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Doughts from "./components/Home/Doughts";
import Layout from "./components/layout/Layout";
import Images from "./components/Home/Images";
import Login from "./components/Login/Login";
import SignUpPage from "./components/Login/Register";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doughts" element={<Doughts />} />
          <Route path="/images" element={<Images />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

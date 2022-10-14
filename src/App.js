import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Profil from "./pages/profil/Profil";
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
// import { useEffect } from "react";
// import axios from "axios";
function App() {

  
  return (
  
    <BrowserRouter >
    <Header/>
    <Sidebar/>
    <main>
    <Routes >
          <Route path="/" element={<Navigate to="/profil/12" />}/>
          <Route path="/profil/:id" element={<Profil />} />
          {/* <Route path="/error" element={<Profil />} /> */}
    </Routes >
    </main>

  </BrowserRouter>
   
  );
}

export default App;

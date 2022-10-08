import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Profil from "./pages/profil/Profil";
import './App.css';
import Sidebar from "./component/sidebar/Sidebar";
// import { useEffect } from "react";
// import axios from "axios";
function App() {

  
  // useEffect(() => {

  //   var config = {
  //     method: 'get',
  //     url: 'http://localhost:5000/user/12/activity',
  //     headers: { }
  //   };
    
  //   axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // })
  
  return (
  
    <BrowserRouter >
    <Header/>
    <Sidebar/>
    <main>
    <Routes >
          <Route path="/" element={<Navigate to="/profil/12" />}/>
          <Route path="/profil/:id" element={<Profil />} />
          <Route path="/error" element={<Profil />} />
    </Routes >
    </main>

  </BrowserRouter>
   
  );
}

export default App;

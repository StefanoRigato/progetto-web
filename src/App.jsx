import { useState } from 'react'
import {HashRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import MainTemplate from "./components/MainTemple/MainTemple";
import Home from "./views/Home/Home";
import WeaponDetail from "./views/WeaponDetail/WeaponDetail";
import WeaponPage from "./views/WeaponPage/WeaponPage";
import NotFound from "./views/NotFound/NotFound";
import Logo from "./assets/img/lotus.png"

function App() {

  const nav = [
    {url: "/", text: "Home"},
    {url: "/weapon", text: "Weapons"}
  ];

  return (
    <Router>
        <MainTemplate
          navItems={nav}
          logo={Logo}
        >
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weapon" element={<WeaponPage />}/>
            <Route path="/weapon/:name" element={<WeaponDetail />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </MainTemplate>
      </Router>
  )
}

export default App

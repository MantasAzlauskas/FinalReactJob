import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Engines from "./Pages/Engines";
import Spareparts from "./Pages/Spareparts";
import Repair from "./Pages/Repair";
import Contacts from "./Pages/Contacts";
import Contactus from "./Pages/Contactus";
import Request from "./Pages/Request";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/engines" element={<Engines />} />
        <Route path="/spareparts" element={<Spareparts />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/requests" element={<Request />} />
      </Routes>
    </Router>
  );
}

export default App;

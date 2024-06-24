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
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/engines"
          element={
            <>
              <Header />
              <Engines />
              <Footer />
            </>
          }
        />
        <Route
          path="/spareparts"
          element={
            <>
              <Header />
              <Spareparts />
              <Footer />
            </>
          }
        />
        <Route
          path="/repair"
          element={
            <>
              <Header />
              <Repair />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Header />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <Header />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route path="/requests" element={<Request />} />
      </Routes>
    </Router>
  );
}

export default App;

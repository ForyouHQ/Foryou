import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {REGISTER_PAGE} from "./constants/routes";
import {Register} from "./pages/register/register";

function App() {
  return (
      <Router>
        <Routes>
          <Route path={REGISTER_PAGE} element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;

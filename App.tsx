import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

import logo from './logo.svg';
import './css/reset.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </Router>
  );
}



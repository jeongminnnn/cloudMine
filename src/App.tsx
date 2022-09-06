import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

import "./css/reset.css";
import "./css/common.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </Router>
  );
}
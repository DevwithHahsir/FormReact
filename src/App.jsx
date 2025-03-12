import Login from "./componenets/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./componenets/Dashboard/Dashboard";
import Contacts from "./componenets/Contacts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

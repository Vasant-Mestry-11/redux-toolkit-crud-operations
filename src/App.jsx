import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <div className="home_page">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

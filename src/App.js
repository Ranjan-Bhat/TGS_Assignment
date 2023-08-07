//import { Greet } from "./components/Greet";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./routerComponents/Login";
import { Dashboard } from "./routerComponents/Dashboard";
import { Header } from "./routerComponents/Header";
export default function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

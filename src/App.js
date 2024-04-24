import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./auth/LoginScreen";
import RegisterScreen from "./auth/RegisterScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;

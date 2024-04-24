import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./auth/LoginScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;

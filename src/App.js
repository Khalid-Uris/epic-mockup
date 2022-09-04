// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import Logo from "./pages/Logo";
import MultiStep from "./pages/MultiStep";
import TestingMultiStep from "./pages/TestingMultiStep";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/multi_step" element={<MultiStep />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/testing" element={<TestingMultiStep />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

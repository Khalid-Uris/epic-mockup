// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BoardType from './components/BoardType';
import Index from './pages/Index';
import Logo from './pages/Logo';
import MultiStep from './pages/MultiStep';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Index/>}></Route>
          <Route path={'/multi_step'} element={<MultiStep/>}></Route>
          <Route path={'/logo'} element={<Logo/>}/>
          <Route path={'/board-type'} element={<BoardType/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

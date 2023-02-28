import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Placar from "./pages/Placar/Placar.js";
import Jogadores from './pages/Jogadores/Jogadores';


function App() {
  return (
    <div className="App">
      <div className='background'></div>
      <NavBar />
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Placar />}></Route>
            <Route path='/Jogadores' element={<Jogadores />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

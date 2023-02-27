import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Placar from "./components/Placar/Placar";


function App() {
  return (
    <div className="App">
      <div className='background'></div>
      <NavBar />
      <div className='content'>
        <Placar/>
      </div>
    </div>
  );
}

export default App;

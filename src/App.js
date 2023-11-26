import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./components/MainPage"
import QuickExpPage from "./components/kripta_components/quickExp/QuickExpPage"
import PrimeCheckerPage from './components/kripta_components/prime/PrimeCherckerPage';
import SoloNeuronPage from './components/neuronki_components/or_xor/SoloNeuronPage'
import GradientPage from './components/neuronki_components/grad_task/GradientPage';
import LinRegrPage from './components/neuronki_components/linregr_task/LinRegrPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/quickExp" element={<QuickExpPage anotherTasks={[{link:"/primeCheck", name:"Алгоритм Миллера-Рабина"}]}/>}/>
        <Route exact path="/primeCheck" element={<PrimeCheckerPage anotherTasks={[{link:"/quickExp", name:"Алгоритм быстрого возведения в степень"}]}/>}/>
        <Route exact path="/soloNeuron" 
        element={<SoloNeuronPage anotherTasks={[{link:"/gradient", name:"Градиент"} ,{link:"/linregr", name:"Линейная регресия"}]}/>}/>
        <Route exact path="/gradient" 
          element={<GradientPage anotherTasks={[{link:"/soloNeuron", name:"Нейрон OR и XOR"} ,{link:"/linregr", name:"Линейная регресия"}]}/>}/>
        <Route exact path="/linregr" 
        element={<LinRegrPage anotherTasks={[{link:"/soloNeuron", name:"Нейрон OR и XOR"} ,{link:"/gradient", name:"Градиент"}]}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

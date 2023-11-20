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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/quickExp" element={<QuickExpPage/>}/>
        <Route exact path="/primeCheck" element={<PrimeCheckerPage/>}/>
        <Route exact path="/soloNeuron" element={<SoloNeuronPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

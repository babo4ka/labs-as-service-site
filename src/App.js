import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./components/MainPage"
import QuickExpPage from "./components/quickExp/QuickExpPage"
import PrimeCheckerPage from './components/prime/PrimeCherckerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/quickExp" element={<QuickExpPage/>}/>
        <Route exact path="/primeCheck" element={<PrimeCheckerPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

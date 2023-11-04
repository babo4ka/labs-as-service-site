import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./components/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

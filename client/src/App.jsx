import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/home/home";
import CountryDetail from "./components/homeDetail/homeDetail";
import NavBar from "./components/navbar/navbar";
import CreateCountry from "./components/createCountry/createCountry";

function App() {


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/country-detail/:name" element={ <CountryDetail/> } />
        <Route path="/create-country" element={ <CreateCountry /> } />
      </Routes>
    </div>
  );
}

export default App;

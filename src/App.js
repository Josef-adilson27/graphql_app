import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import { Routes, Route } from 'react-router-dom';

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<CharactersList/>}/>
      <Route path="/:id" element={<Character/>}/>
    </Routes>
    
  </div>;
}

export default App;

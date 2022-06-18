
import { Route, Routes } from 'react-router';
import './App.css';
import AlphabetRumble from './components/AlphabetRumble';
import Home from './components/Home';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alphabet-rumble" element={<AlphabetRumble />} />
      </Routes>

    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router';
import './App.css';
import AlphabetRumble from './components/AlphabetRumble';
import Home from './components/Home';
import PictureAnimations from './components/PictureAnimations';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alphabet-rumble" element={<AlphabetRumble />} />
        <Route path="/pic-animations" element={<PictureAnimations />}/>
      </Routes>

    </div>
  );
}

export default App;

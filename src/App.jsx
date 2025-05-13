import { useState } from 'react';
import BombSelector from './components/BombSelector';
import PlaneSelector from './components/PlaneSelector';
import Results from './components/Results';

import { bombs } from './data/bombs';
import { planes } from './data/planes';

import './App.css';

function App() {
  const [selectedBomb, setSelectedBomb] = useState(null);
  const [selectedPlane, setSelectedPlane] = useState(null);

  return (
    <div ClassName = "App">
      <h1> Payload Calculator </h1>


      <PlaneSelector
      planes={planes}
      selectedPlane={selectedPlane}
      onChange={setSelectedPlane}
      />


      <BombSelector
      bombs={bombs}
      selectedBomb={selectedBomb}
      selectedPlane={selectedPlane}
      onChange={setSelectedBomb}
      />

      <Results
      bomb={selectedBomb}
      plane={selectedPlane}
      bombsData={bombs}
      />
    </div>
  )
}

export default App;
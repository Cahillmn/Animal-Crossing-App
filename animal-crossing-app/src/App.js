import React from 'react';
import './App.css';
import AnimalCrossingApp from './components/AnimalCrossingApp';
import VillagersInfo from './components/VillagerInfo';
import { Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

const HomePage = () => {

  return (
    <>
      <NavBar />
      <div>
        <h1>Animal Crossing New Horizons</h1>
        <Home />
      </div>
    </>
  )
};

const Characters = () => {

  return (
    <>
      <NavBar />
      <div>
        <h1>Animal Crossing Villagers!</h1>
        <AnimalCrossingApp />
      </div>
    </>
  )
};

const CharactersInfoPage = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <div>
        <h1>Villager Details</h1>
        <VillagersInfo
          id={id} />
      </div>
    </>
  );
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route
          path="/villager/:id"
          element={<CharactersInfoPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

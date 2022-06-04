import React from 'react';
import './App.css';
import AnimalCrossingApp from './components/AnimalCrossingApp';
import VillagersInfo from './components/VillagerInfo';
import { Route, Routes, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Fish from './components/Fish';
import FishInfo from './components/FishInfo';
import Bugs from './components/Bugs';
import BugsInfo from './components/BugsInfo';
import SeaCreatures from './components/SeaCreatures';
import SeaCreaturesInfo from './components/SeaCreaturesInfo';

import Banner from './components/Banner';
import Footer from './components/Footer';


const HomePage = () => {

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Animal Crossing New Horizons</h1>
        <Home />
      </div>
      <Footer />
    </>
  )
};

// Characters

const Characters = () => {

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Animal Crossing Villagers!</h1>
        <AnimalCrossingApp />
      </div>
      <Footer />
    </>
  )
};

const CharactersInfoPage = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Villager Details</h1>
        <VillagersInfo
          id={id} />
      </div>
      <Footer />
    </>
  );
}

// Fish

const FishSummary = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Fish</h1>
        <Fish
          id={id} />
      </div>
      <Footer />
    </>
  );
}

const FishDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Fish Details</h1>
        <FishInfo
          id={id} />
      </div>
      <Footer />
    </>
  );
}

// Bugs

const BugSummary = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Bugs</h1>
        <Bugs
          id={id} />
      </div>
      <Footer />
    </>
  );
}

const BugDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>Bug Details</h1>
        <BugsInfo
          id={id} />
      </div>
      <Footer />
    </>
  );
}

// SeaCreatures

const SeaCreaturesSummary = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>SeaCreatures</h1>
        <SeaCreatures
          id={id} />
      </div>
      <Footer />
    </>
  );
}

const SeaCreaturesDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Banner />
      <NavBar />
      <div>
        <h1>SeaCreatures Details</h1>
        <SeaCreaturesInfo
          id={id} />
      </div>
      <Footer />
    </>
  );
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/fish" element={<FishSummary />} />
        <Route path="/bugs" element={<BugSummary />} />
        <Route path="/seacreatures" element={<SeaCreaturesSummary />} />
        <Route
          path="/villager/:id"
          element={<CharactersInfoPage />}
        />
        <Route
          path="/fish/:id"
          element={<FishDetails />}
        />

        <Route
          path="/bugs/:id"
          element={<BugDetails />}
        />

        <Route
          path="/seacreatures/:id"
          element={<SeaCreaturesDetails />}
        />


      </Routes>
    </div >
  );
}

export default App;

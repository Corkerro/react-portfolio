import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainSite from './MainSite';

export const targetRefsContext = React.createContext();
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
    </Routes>
  );
}

export default App;

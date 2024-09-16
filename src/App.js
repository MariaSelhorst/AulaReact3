import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import HomePage from "./Pages/PokeApi/Home";
import PokemonDetail from "./Pages/PokeApi/Details";
import NavBar from "./components/Navbar";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={
        <ProtectedRoute
        errorPage={<AccessDenied />}
        targetPage={<NavBar />}
        />
        }>
        <Route path='' element={<HomePage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </>
  );
}

export default App;

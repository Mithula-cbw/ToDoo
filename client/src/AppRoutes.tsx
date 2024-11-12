// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './layouts/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Define routes */}
      <Route path="/" element={<Home></Home>} />
    </Routes>
  );
};

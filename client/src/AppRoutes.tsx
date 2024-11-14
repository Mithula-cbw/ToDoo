// src/routes.js
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home'
import SignUp from './layouts/SignUp'
import Register from './components/Register';
import Login from './components/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Define routes */}
      <Route path="/" element={<Home></Home>} />
      <Route path="/log-in" element={<SignUp Title={"Welcome Back"} subTitle={"Your Tasks Were Waiting"}><Login/></SignUp>} />
      <Route path="/register" element={<SignUp Title={`Welcome ToDoo`} subTitle={"Best Place to organize your day to day tasks!"}><Register/></SignUp>} />
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

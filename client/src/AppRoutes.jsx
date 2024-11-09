import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './layouts/home';
import SignUp from './layouts/SignUp';
import Login from './components/login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/log-in" element={<SignUp Title={"Welcome Back"} subTitle={"Your Task Were Waiting"}><Login/></SignUp>} />
      <Route path="/register" element={<SignUp Title={`Welcome ToDoo`} subTitle={"Best Place to organize your day to day tasks!"}><Login/></SignUp>} />
    
    </Routes>
  );
};

export default App;

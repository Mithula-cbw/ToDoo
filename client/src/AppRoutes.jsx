import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './layouts/home';
import SignUp from './layouts/SignUp';
import Login from './components/login';
import Register from './components/Register';

const UserPage = () => {
  const { id } = useParams();  // Retrieve the 'id' parameter from the URL
  return <div>User ID: {id}</div>;  // Display the user ID
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/log-in" element={<SignUp Title={"Welcome Back"} subTitle={"Your Tasks Were Waiting"}><Login/></SignUp>} />
      <Route path="/register" element={<SignUp Title={`Welcome ToDoo`} subTitle={"Best Place to organize your day to day tasks!"}><Register/></SignUp>} />
    </Routes>
  );
};

export default App;

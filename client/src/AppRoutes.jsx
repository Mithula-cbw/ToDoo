import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './layouts/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default App;

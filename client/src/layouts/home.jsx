import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('/')
      .then(response => {
        console.log('Data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-green-600 text-3xl">Home</h1>
    </div>
  );
};

export default Home;

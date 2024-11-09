import axios from 'axios';

const Home = () => {
    const fetchData = ()=>{
        axios.get('/user/all')
        .then(response => {
          console.log('Data:', response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }

  return (
    <div className="m-10">
      <h1 className="text-green-600 text-3xl">Home</h1>
      <button onClick={fetchData}>click me</button>
    </div>
  );
};

export default Home;

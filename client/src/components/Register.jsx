import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');    
    const [ confirmPassword, setConfirmPassword] = useState('');
    const [ error, setError] = useState('');
    const [ warning, setWarning] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=>{
      
      const {value, name} = e.target;
      setError('');
      setWarning('');

      if(name === 'email'){
        setEmail(value);

      }else if(name === 'password'){
        setPassword(value);

        if(value.length < 8){
          setWarning("Password must be at least 8 characters")
        }else{
          setWarning('')
        }
      }else if(name === 'confirmPassword'){
        setConfirmPassword(value);

        if(value !== password){
            setWarning('password does not match');
        }else{
            setWarning('');
        }
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true); // Start loading

      if (password.length < 8) {
        setError("Password must be at least 8 characters long");
        setLoading(false); // Stop loading
        return; // Exit the function to prevent form submission
      }

      if(password !== confirmPassword){
        setError("Password does not match");
        setLoading(false); // Stop loading
        return;
      }
  
      try {
        const response = await axios.post("/user/register", {
          email,
          password,
        });
        
        console.log("register successful:", response.data);
        setError(''); // Clear any previous errors

        navigate('/');
  
        // Handle successful login (e.g., redirect or store token)
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred during login.");
        console.error("Error during login:", err.response ? err.response.data : err.message);
      } finally {
        setLoading(false); // End loading
      }
    };
    
  return(
    <div className="flex flex-col justify-center items-start h-full">
      <div className="bg-transparent px-4 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="email" className="block text-gray-200 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label for="password" className="block text-gray-200 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div> 

          <div className="mb-6">
            <label for="password" className="block text-gray-200 mb-2">Confirm Password</label>
            <input
              type="Password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div> 


          {error && <p style={{ color: 'red' }}>{error}</p>}
          {warning && <p style={{ color: 'yellow' }}>{warning}</p>}
          <button
            type="submit"
            className="w-full py-2 mt-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
          Register
          </button>
          <div className="text-center mt-4 text-sm text-gray-50">Already Have an Account? 
            <a href="/log-in" className="px-3 text-sm text-blue-400 hover:underline">Log in</a>
          </div>
        </form>
      </div>
  </div>

  );
}

export default Register;




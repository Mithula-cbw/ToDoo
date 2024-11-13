import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');    
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setError('');
    setWarning('');

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
      if (value.length < 8) {
        setWarning("Password must be at least 8 characters");
      } else {
        setWarning('');
      }
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      if (value !== password) {
        setWarning('Password does not match');
      } else {
        setWarning('');
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/user/register", {
        email,
        password,
      });
      
      console.log("Register successful:", response.data);
      setError('');
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during registration.");
      console.error("Error during registration:", err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div className="flex flex-col justify-center items-start h-full font-poppins">
      <div className="bg-transparent px-4 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="dark:text-gray-800 rounded-sm pl-2 bg-gray-100 w-full p-1 border  focus:outline-none focus:ring-2 focus:ring-primary-yellow-low placeholder:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-200 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="dark:text-gray-800 rounded-sm pl-2 bg-gray-100 w-full p-1 border  focus:outline-none focus:ring-2 focus:ring-primary-yellow-low placeholder:text-sm"
              placeholder="Enter your password"
            />
          </div> 

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-200 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="dark:text-gray-800 rounded-sm pl-2 bg-gray-100 w-full p-1 border  focus:outline-none focus:ring-2 focus:ring-primary-yellow-low placeholder:text-sm"
              placeholder="Confirm your password"
            />
          </div> 

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {warning && <p style={{ color: 'yellow' }}>{warning}</p>}
          <button
            type="submit"
            className="w-full py-2 mt-5 bg-primary-yellow text-black font-bold rounded-md hover:bg-yellow-500 focus:outline-none"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <div className="text-center mt-4 text-sm text-gray-50">
            Already Have an Account? 
            <a href="/log-in" className="px-3 text-sm text-blue-400 hover:underline">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

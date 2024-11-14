import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "@/contexts/userProvider";
import { Link } from 'react-router-dom';


const Login: React.FC = () => {
  const { user_id, setUserId } = useUser();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading

        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            setLoading(false); // Stop loading
            return; // Exit the function to prevent form submission
        }

        try {
            const response = await axios.post("/user/log-in", {
                email,
                password,
            });

            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('user_id', response.data.user_id);
            setUserId(response.data.user_id);
            console.log("Login successful:", response.data);
            setError(''); // Clear any previous errors

            navigate('/');
        } catch (err: any) {
            setError(err.response?.data?.message || "An error occurred during login.");
            console.error("Error during login:", err.response ? err.response.data : err.message);
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div className="flex flex-col justify-center items-start h-full font-poppins">
            <div className="bg-transparent px-4 rounded-lg shadow-lg w-full">
                <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">Log in</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email Address</label>
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
                        <label htmlFor="password" className="block text-gray-300 mb-2 text-sm">Password</label>
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

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {warning && <p style={{ color: 'yellow' }}>{warning}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 mt-5 bg-primary-yellow text-black font-bold rounded-md hover:bg-yellow-500 focus:outline-none"
                    >
                        Login
                    </button>
                    <div className="text-center mt-4 text-sm text-gray-50">
                        Don't Have an Account?
                        <Link to="/register" className="px-3 text-sm text-blue-400 hover:underline">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

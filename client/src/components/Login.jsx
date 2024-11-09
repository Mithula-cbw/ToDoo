import axios from "axios";

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("form submitted");

        try{
            const response = await axios.post("/user/log-in", {
                email:'mithula6@gmail.com',
                password:"rania123",
              });
              console.log(response);
        }catch(error){
            console.error("Error during login:", error.response ? error.response.data : error.message);
        }
    }
    
  return(
    <div className="flex flex-col justify-center items-start h-full">
  <div className="bg-transparent px-4 rounded-lg shadow-lg w-96">
    <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">Log in</h2>


    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label for="email" className="block text-gray-200 mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
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
          className="w-full p-1 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 mt-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Login
      </button>
    </form>
    <div className="text-center mt-4 text-sm text-gray-50">Don't Have an Account? 
      <a href="/register" className="px-3 text-sm text-blue-500 hover:underline">Register</a>
    </div>
  </div>
</div>

  );
}

export default Login;
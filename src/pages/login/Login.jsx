// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-8">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500 px-4">Chat App</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-blue-900 label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//               // value={username}
//               // onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-blue-900 label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//               // value={username}
//               // onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <a href="#" className="text-sm text-blue-600 hover:underline hover:text-blue-600 mt-2 inline-block">{"Don't"} have an account</a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Login
          <span className="text-sky-400 ml-2">Chat App</span>
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={username}
							onChange={(e) => setUsername(e.target.value)}
              />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-200"
              value={password}
							onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/signup" 
              className="text-sm text-sky-400 hover:text-sky-300 transition duration-200"
            >
              Don't have an account?
            </Link>
          </div>

          <button 
            type="submit"
            className="w-full py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-transparent"
            disabled={loading}
          >
           {loading ? <span className='loading loading-spinner '></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

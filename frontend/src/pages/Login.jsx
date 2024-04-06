import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";
import Lottie from "lottie-react";
import pattern from "../assets/lotti/pattern.json";

const Login = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
  return (
    <div>
        <Lottie className="yellow-pattern-1" animationData={pattern} />
        <Lottie className="yellow-pattern-2" animationData={pattern} />
        <div className="flex flex-col items-center justify-center w-[40vw] mx-auto mt-[20vh]">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-yellow-200"> Edutainment</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-200 label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="rounded-lg px-4 w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-yellow-200 label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="rounded-lg px-4 w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-yellow-200 label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="rounded-lg px-4 w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-yellow-200 hover:underline hover:text-red-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className='rounded-lg btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-white hover:text-orange-300 border-none px-10 py-3' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Log In"}
            </button>
        </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};
export default Login;

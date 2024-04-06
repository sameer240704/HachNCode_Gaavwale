import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, email, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto z-50">
      <div className="w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-500">Edutainment</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-black label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-black label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-black label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className="w-full input input-bordered h-10 bg-gray-600 text-green-300"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-black hover:underline hover:text-red-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-gray-800 bg-green-300 hover:text-green-300 border-none"
              disabled={loading} onClick={handleSubmit}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

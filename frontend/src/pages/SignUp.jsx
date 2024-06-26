import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup.js";
import React from "react";
import Lottie from "lottie-react";
import pattern from "../assets/lotti/pattern.json";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    standard: "",
    school: "",
    profilePic: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

  return (
    <div>
      <Lottie className="yellow-pattern-1" animationData={pattern} />
      <Lottie className="yellow-pattern-2" animationData={pattern} />
      <div className="flex flex-col items-center justify-center w-[40vw] mx-auto mt-11">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-800">
          <h1 className="text-3xl font-semibold text-center text-gray-300 mb-8">
            Sign Up <span className="text-yellow-200">Artify</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-yellow-200">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="rounded-lg px-4 w-full input input-bordered h-10 bg-gray-600 text-green-300"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>

            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-yellow-200">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="rounded-lg w-full input input-bordered h-10 px-4 bg-gray-600 text-green-300"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-yellow-200">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="rounded-lg w-full input input-bordered px-4 h-10 bg-gray-600 text-green-300"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-yellow-200">
                  Standard
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter standard"
                className="rounded-lg w-full input input-bordered px-4 h-10 bg-gray-600 text-green-300"
                value={inputs.standard}
                onChange={(e) =>
                  setInputs({ ...inputs, standard: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-yellow-200">
                  College
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter college"
                className="rounded-lg w-full input input-bordered px-4 h-10 bg-gray-600 text-green-300"
                value={inputs.school}
                onChange={(e) =>
                  setInputs({ ...inputs, school: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-yellow-200">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="rounded-lg w-full input input-bordered px-4 h-10 bg-gray-600 text-green-300"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-yellow-200">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="rounded-lg w-full input input-bordered px-4 h-10 bg-gray-600 text-green-300"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-yellow-200">
                  Profile Pic
                </span>
              </label>
              <input
                type="file"
                className="rounded-lg w-full input input-bordered px-4 h-10 text-orange-300"
                name="my_file"
                onChange={(e) =>
                  setInputs({ ...inputs, profilePic: e.target.files[0] })
                }
              />
            </div>

            <Link
              to={"/login"}
              className="text-sm hover:underline text-yellow-200 hover:text-red-600 mt-2 inline-block"
              href="#"
            >
              Already have an account?
            </Link>

            <div>
              <button
                className="rounded-lg btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-white hover:text-orange-300 border-none px-10 py-3"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

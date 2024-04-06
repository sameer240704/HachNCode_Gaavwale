import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup.js";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		name: "",
		username: "",
		email: "",
		standard: "",
		school: "",
		Profile: "",
		password: "",
		confirmPassword: ""
	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs);
		await signup(inputs)
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-red-500'>Aur Batao</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10 bg-gray-600 text-green-300'
							value={inputs.name}
							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>Email</span>
						</label>
						<input
							type='text'
							placeholder='johndoe@gmail.com'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.email}
							onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>Standard</span>
						</label>
						<input
							type='text'
							placeholder='1'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.standard}
							onChange={(e) => setInputs({ ...inputs, standard: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-black'>School/College</span>
						</label>
						<input
							type='text'
							placeholder='School/College'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.school}
							onChange={(e) => setInputs({ ...inputs, school: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.password}
							autoComplete="off"
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
							value={inputs.confirmPassword}
							autoComplete="off"
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-black'>Profile Pic</span>
						</label>
						<input
							type='file'
							placeholder='Profile Pic'
							className='w-full  text-green-300'
							value={inputs.Profile}
							autoComplete=""
							onChange={(e) => setInputs({ ...inputs, Profile: e.target.value })}
						/>
					</div>

					<Link
						to={"/login"}
						className='text-sm hover:underline text-black hover:text-red-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-green-300 hover:text-green-300 border-none' onClick={handleSubmit} disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
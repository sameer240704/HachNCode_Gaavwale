import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-red-500'>Edutainment</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base text-black label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-black label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
						/>
					</div>
					<Link to='/signup' className='text-sm text-black hover:underline hover:text-red-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 text-gray-800 bg-green-300 hover:text-green-300 border-none' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
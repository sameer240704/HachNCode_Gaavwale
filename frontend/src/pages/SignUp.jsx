import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-red-500'>Edutainment</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-black'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10 bg-gray-600 text-green-300'
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
						/>
					</div>

					<div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Your Image</span>
                        </label>
                        <input
                            type='file' // Change type to 'file' to allow image upload
                            className='w-full input input-bordered h-10 bg-gray-600 text-green-300'
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
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 text-gray-800 bg-green-300 hover:text-green-300 border-none' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
import React from 'react'

const Login = () => {
  return (
		<div className='login-page__wraper'>
			<h1 className='text-primary text-center d-block mb-5'>
				The University of Utah
			</h1>
			<div className='row'>
				<div className='col'>
					Hello, who is <span className='text-primary'>THIS</span>
					<form className='from-group my-3'>
						<label htmlFor='email'>Email</label>
						<br />
						<input
							type='email'
							placeholder='bruce@gmail.com'
							id='email'
							className='form-control'
						/>

						<label htmlFor='password'>Password</label>
						<br />
						<input
							type='password'
							placeholder='At least 8 characters'
							id='password'
							className='form-control'
						/>

						<button className='btn btn-dark mt-3'>Log me in to my account</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login

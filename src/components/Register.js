import React from 'react'

const Register = () => {
  return (
		<div className='register-page__wraper container-fluid'>
			<div className='row'>
				<div className='col-md-5'>
					<img
						src='https://www.georgetown.edu/wp-content/uploads/2019/09/20190828_FirstDay_NingLeng-_McCourt-45110optimized-2000x1500-c-default.jpg'
						alt=''
					/>
				</div>
				<div className='col-md-4 m-auto'>
					Get better <span className="text-primary">Knowladge</span> with conversational community, professors and more
					<form className="from-group my-5">
						<label htmlFor="email">Email</label><br/>
						<input type="email" placeholder='bruce@gmail.com' id='email' className="form-control"/>

						<label htmlFor="password">Password</label><br/>
						<input type="password" placeholder='At least 8 characters' id='password' className="form-control"/>

						<button className="btn btn-dark mt-3">Create my account</button>
					</form>
					
				</div>
			</div>
		</div>
	);
}

export default Register

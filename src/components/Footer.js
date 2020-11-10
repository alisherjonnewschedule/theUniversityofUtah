import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer bg-dark p-3'>
			<h4 className='text-primary text-center mt-3 mb-5'>
				<Link className='text-inherit hover-text-primary' to='/'>
					The University of Utah
				</Link>
			</h4>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<h3 className='text-white text-center'>
							We tought over <br />{' '}
							<span className='text-primary mt-2 d-inline-block'>100M+</span>{' '}
							<br /> students
						</h3>
						<h4 className='text-white text-center'>Follow our newsletter</h4>
						<form className='form-group my-4'>
							<input
								type='email'
								className='form-control my-3'
								placeholder='Enter your Email address'
							/>
							<button type='submit' className='btn btn-primary btn-block'>
								Submit
							</button>
						</form>
					</div>
					<div className='col-md-5 offset-md-1'>
						<h3 className='text-primary text-center'>Useful links</h3>
						<div className='footer-link__wraper'>
							<Link className='text-white hover-text-primary' to='/teachers'>
								Teacher
							</Link>
						</div>
						<div className='footer-link__wraper'>
							<Link className='text-white hover-text-primary' to='/about'>
								About Us
							</Link>
						</div>
						<div className='footer-link__wraper'>
							<Link className='text-white hover-text-primary' to='/contact'>
								Contact Us
							</Link>
						</div>
						<div className='footer-link__wraper'>
							<Link className='text-white hover-text-primary' to='/login'>
								Login
							</Link>
						</div>
						<div className='footer-link__wraper'>
							<Link className='text-white hover-text-primary' to='/register'>
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="text-white text-center mt-3 d-block">
			&copy; Copyright UU, 2020 

			</div>
		</footer>
	);
};

export default Footer;

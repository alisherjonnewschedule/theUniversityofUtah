import React from 'react';

const Contact = () => {
	return (
		<section className='contact-page'>
			<div className='contact-page__header d-flex w-100 align-items-center justify-content-center text-primary'>
				<div className='contact-page__header-wraper'>
					<h1>Get in touch</h1>
					<p>
						Want to contact us? We'd love to hear from you. Here is how you can
						reach us!{' '}
					</p>
				</div>
			</div>
			<div className='container mb-5 contact-page__container'>
				<div className='row justify-content-center'>
					<div className='col-md-5'>
						<div className='card text-center'>
							<div className='card-header'>
								<i className='fas fa-phone fa-3x'></i>
								<h4 className='mt-3'>Talk to us</h4>
							</div>
							<div className='card-body'>
								<button className='btn d-block text-center my-5' href=''>
									+123456789
								</button>
								<button className='btn d-block text-center my-5' href='#'>
									View all global numbers
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-5'>
						<div className='card text-center'>
							<div className='card-header'>
								<i className='fas fa-comment fa-3x'></i>
								<h4 className='mt-3'>Contact customer support</h4>
							</div>
							<div className='card-body'>
								<button className='btn d-block text-center my-5' href='#'>
									+123456789
								</button>
								<button className='btn d-block text-center my-5' href='#'>
									View all global numbers
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

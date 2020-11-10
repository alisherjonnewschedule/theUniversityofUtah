import React from 'react';

const HomeSection = () => {
	return (
		<div className='home-section mb-5'>
			<h1 className='text-primary text-center my-5'>Reasons to study here</h1>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						<div className='card'>
							<img
								src='https://utulsa.edu/wp-content/uploads/2020/08/poster.jpg'
								alt=''
								className='card-img-top'
							/>
							<div className='card-body'>
								<div className='card-title text-center'>Reason 1</div>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente, reiciendis!
								</p>
								<button href='#' className='btn btn-primary btn-block'>
									Read more...
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<img
								src='https://www.ucumberlands.edu/sites/default/files/2018-01/campus-1440x720.jpg'
								alt=''
								className='card-img-top'
							/>
							<div className='card-body'>
								<div className='card-title text-center'>Reason 2</div>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente, reiciendis!
								</p>
								<button href='#' className='btn btn-primary btn-block'>
									Read more...
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<img
								src='https://www.timeshighereducation.com/sites/default/files/stanford-university-best-universities-in-the-united-states-2016.jpg'
								alt=''
								className='card-img-top'
							/>
							<div className='card-body'>
								<div className='card-title text-center'>Reason 3</div>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente, reiciendis!
								</p>
								<button href='#' className='btn btn-primary btn-block'>
									Read more...
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='card'>
							<img
								src='https://www.du.edu/sites/default/files/styles/hero_image_1200_x_476/public/hero-image%20%281%29.jpg?itok=bjL2iMOf'
								alt=''
								className='card-img-top'
							/>
							<div className='card-body'>
								<div className='card-title text-center'>Reason 4</div>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente, reiciendis!
								</p>
								<button href='#' className='btn btn-primary btn-block'>
									Read more...
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection;

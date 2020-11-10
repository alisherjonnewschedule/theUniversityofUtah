import React from 'react';

const SubjectsSection = () => {
	return (
		<div className='container subjects-section my-5'>
			<h2 className='text-center mb-5'>Majors We Have</h2>
			<table className='table table-striped table-bordered'>
				<thead className='thead-dark'>
					<th>Major 1</th>
					<th>Major 2</th>
					<th>Major 3</th>
					<th>Major 4</th>
					<th>Major 5</th>
				</thead>
				<tbody>
					<tr>
						<td>Lorem ipsum dolor sit amet consectetur.</td>
						<td>Lorem ipsum dolor sit amet consectetur.</td>
						<td>Lorem ipsum dolor sit amet consectetur.</td>
						<td>Lorem ipsum dolor sit amet consectetur.</td>
						<td>Lorem ipsum dolor sit amet consectetur.</td>
					</tr>
					<tr>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
							qui!
						</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
							qui!
						</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
							qui!
						</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
							qui!
						</td>
						<td>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
							qui!
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SubjectsSection;

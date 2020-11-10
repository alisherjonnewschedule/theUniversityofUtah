import React from 'react';

const Teachers = () => {
	const teachers = [
		{
			id: 1,
			img:
				'https://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher-1024x584.png',
			name: 'teacher name',
			degree: 'PhD',
			info:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore deleniti omnis recusandae, officia consequuntur rem praesentium excepturi in sit commodi vero quia exercitationem enim mollitia officiis?',
			number: '+987456321',
		},
		{
			id: 2,
			img:
				'https://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher-1024x584.png',
			name: 'teacher name',
			degree: 'PhD',
			info:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore deleniti omnis recusandae, officia consequuntur rem praesentium excepturi in sit commodi vero quia exercitationem enim mollitia officiis?',
			number: '+987456321',
		},
		{
			id: 3,
			img:
				'https://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher-1024x584.png',
			name: 'teacher name',
			degree: 'PhD',
			info:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore deleniti omnis recusandae, officia consequuntur rem praesentium excepturi in sit commodi vero quia exercitationem enim mollitia officiis?',
			number: '+987456321',
		},
		{
			id: 4,
			img:
				'https://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher-1024x584.png',
			name: 'teacher name',
			degree: 'PhD',
			info:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore deleniti omnis recusandae, officia consequuntur rem praesentium excepturi in sit commodi vero quia exercitationem enim mollitia officiis?',
			number: '+987456321',
		},
		{
			id: 5,
			img:
				'https://www.educationnext.org/wp-content/uploads/2020/03/ednext-sept19-blog-hess-teacher-1024x584.png',
			name: 'teacher name',
			degree: 'PhD',
			info:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis tempore deleniti omnis recusandae, officia consequuntur rem praesentium excepturi in sit commodi vero quia exercitationem enim mollitia officiis?',
			number: '+987456321',
		},
	];

	const Teacher = ({teacher}) => {
		return (
			<div className='col-md-5 my-4'>
				<div className='card text-center'>
					<div className='card-header'>
						<img src={teacher.img} alt="" width='100px' height='100px' className='rounded-circle' />
						<h4 className='mt-3'>{teacher.name}</h4>
					</div>
					<div className='card-body'>
						<div className='card-title'>
              {teacher.degree}
            </div>
            <p className="card-text">
              {teacher.info}
            </p>
            <div className="card-footer">
              {teacher.number}
            </div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='teachers-page'>
			<div className='teachers-page__header d-flex w-100 align-items-center justify-content-center text-primary'>
				<div className='teachers-page__header-wraper'>
					<h1>Introducing Our Teachers</h1>
				</div>
			</div>
			<div className='container mb-5 teachers-page__container'>
				<div className='row justify-content-center'>
					{
            teachers.map(teacher => (
              <Teacher key={teacher.id} teacher={teacher} />
            ))
          }
				</div>
			</div>
		</div>
	);
};

export default Teachers;

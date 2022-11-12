import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
	const { id } = useParams();
	const [data, setData] = useState({});

	useEffect(() => {
		fetch('http://localhost:8000/employee/' + id)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				console.log(err.message);
			});
	});

	return (
		<div className=''>
			<h2 className='text-center p-4 text-3xl'>Details</h2>
			<div className='text-center'>
				{data && (
					<div className='border inline-block p-5 rounded-md bg-gray-200 text-left shadow-md'>
						<p>
							<span className='font-medium tracking-wide leading-relaxed'>ID: </span>
							{data.id}
						</p>
						<p>
							<span className='font-medium tracking-wide leading-relaxed'>Fullname: </span>
							{data.name}
						</p>
						<p>
							<span className='font-medium tracking-wide leading-relaxed'>Email: </span>
							{data.email}
						</p>
						<p>
							<span className='font-medium tracking-wide leading-relaxed'>Phone: </span>
							{data.phone}
						</p>
						<div className='mt-5 text-center'>
							<Link
								className='bg-blue-600 py-1 px-2 rounded-sm'
								to='/'
							>
								Back to List
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Details;

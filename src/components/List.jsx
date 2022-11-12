import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
	const [data, setData] = useState(null);
	const navigate = useNavigate();

	const editData = (id) => {
		navigate('/employee/edit/' + id);
	};

	const deleteData = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			fetch('http://localhost:8000/employee/' + id, {
				method: 'DELETE',
			})
				.then((res) => {
					alert('Removed successfully!');
					window.location.reload();
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	};

	const detailsData = (id) => {
		navigate('/employee/details/' + id);
	};

	useEffect(() => {
		fetch('http://localhost:8000/employee')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<section className=''>
			<h2 className='text-center p-4 text-3xl'>React JS CRUD using JSON-server </h2>
			<div className='max-w-[700px] mx-auto'>
				<div className='p-4 text-center'>
					<Link
						to='employee/create'
						className='bg-blue-600 p-2 rounded-md'
					>
						Add new
					</Link>
				</div>
				<table className='mx-auto table-auto border-separate'>
					<thead>
						<tr>
							<th className='border border-black py-2 px-3 bg-gray-300'>Name</th>
							<th className='border border-black py-2 px-3 bg-gray-300'>Email</th>
							<th className='border border-black py-2 px-3 bg-gray-300'>Action</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map((item) => (
								<tr key={item.id}>
									<td className='border border-black py-2 px-3 bg-gray-300'>{item.name}</td>
									<td className='border border-black py-2 px-3 bg-gray-300'>{item.email}</td>
									<td className='border border-black py-2 px-3 bg-gray-300'>
										<div className='flex justify-between gap-2'>
											<button
												onClick={() => editData(item.id)}
												className='bg-blue-600 py-1 px-2 rounded-md'
											>
												Edit
											</button>
											<button
												onClick={() => deleteData(item.id)}
												className='bg-red-600 py-1 px-2  rounded-md'
											>
												Delete
											</button>
											<button
												onClick={() => detailsData(item.id)}
												className='bg-blue-600 py-1 px-2 rounded-md'
											>
												Details
											</button>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default List;

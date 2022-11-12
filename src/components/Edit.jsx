import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
	const { id } = useParams();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		fetch('http://localhost:8000/employee/' + id)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setName(res.name);
				setEmail(res.email);
				setPhone(res.phone);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = { name, email, phone };

		fetch('http://localhost:8000/employee/' + id, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => {
				alert('Updated successfully!');
				navigate('/');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<section>
			<h2 className='text-center p-4 text-3xl'>Edit</h2>

			<div className='text-center'>
				<form
					action=''
					onSubmit={handleSubmit}
				>
					<div className='mb-4'>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='full name'
							required
						/>
					</div>

					<div className='mb-4'>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='email'
							placeholder='email'
							required
						/>
					</div>

					<div className='mb-4'>
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className='shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							placeholder='phone'
							required
						/>
					</div>

					<div className='flex justify-center gap-3'>
						<button
							className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Save
						</button>
						<Link
							to='/'
							className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded focus:outline-none focus:shadow-outline'
							type='button'
						>
							Back
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Edit;

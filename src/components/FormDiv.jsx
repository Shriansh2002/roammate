import { useState } from "react";

const FormDiv = () => {
	const [data, setData] = useState({
		origin: "",
		destination: "",
		departure: "",
		return: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleClick = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='bg-white rounded-lg border shadow-lg p-10 max-w-lg w-full'>
				<h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
					Plan Your Next Trip
				</h1>
				<form className='space-y-6' onSubmit={handleClick}>
					<InputComponent
						label='Origin'
						id='origin'
						name='origin'
						placeholder='Enter your origin'
						value={data.origin}
						onChange={handleChange}
					/>
					<InputComponent
						label='Destination'
						id='destination'
						name='destination'
						placeholder='Enter your destination'
						value={data.destination}
						onChange={handleChange}
					/>
					<div className='grid grid-cols-2 gap-4'>
						<InputComponent
							label='Departure'
							id='departure'
							name='departure'
							type='date'
							placeholder='Enter departure date'
							value={data.departure}
							onChange={handleChange}
						/>
						<InputComponent
							label='Return'
							id='return'
							name='return'
							type='date'
							placeholder='Enter return date'
							value={data.return}
							onChange={handleChange}
						/>
					</div>
					<div>
						<button
							type='submit'
							className='w-full bg-indigo-600 text-white rounded-lg p-3 mt-4 hover:bg-indigo-700 transition-colors'
						>
							Find My Trip
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormDiv;

const InputComponent = ({
	label,
	id,
	name,
	type = "text",
	placeholder = "",
	value,
	onChange,
}) => {
	return (
		<div>
			<label
				htmlFor={id}
				className='block text-sm font-medium text-gray-700'
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				className='w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

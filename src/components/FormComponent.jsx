import React from "react";
import ButtonComponent from "./Button";
import InputComponent from "./Input";

const FormComponent = ({ data, handleChange, handleSubmit, isLoading }) => {
	return (
		<section className='min-h-screen flex py-10 items-center justify-center'>
			<div className='bg-white rounded-lg shadow-lg p-10 min-w-[300px] sm:min-w-[600px] h-fit'>
				<h1 className='text-3xl font-bold text-center text-gray-800 mb-5'>
					Plan Your Next Trip ✈️
				</h1>
				<form className='space-y-4' onSubmit={handleSubmit}>
					<InputComponent
						label='Destination'
						id='destination'
						name='destination'
						placeholder='Enter your destination'
						value={data.destination}
						onChange={handleChange}
					/>
					<InputComponent
						label='Number of Days'
						id='days'
						name='days'
						type='number'
						placeholder='Enter number of days for your trip'
						value={data.days}
						onChange={handleChange}
						min='1'
					/>
					<ButtonComponent isLoading={isLoading} disabled={isLoading}>
						{isLoading ? "Finding Your Trip..." : "Find My Trip"}
					</ButtonComponent>
				</form>
			</div>
		</section>
	);
};

export default FormComponent;

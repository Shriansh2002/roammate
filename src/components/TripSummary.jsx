import React from "react";
import TripCard from "./TripCard";
import ButtonComponent from "./Button";

const TripSummary = ({ result, setIsSubmitted }) => {
	return (
		<section className='w-full p-8 bg-gray-50'>
			<h2 className='text-3xl font-bold text-center mb-8 text-indigo-700'>
				Your Trip Plan
			</h2>

			<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
				<div className='grid grid-cols-6 gap-x-4 bg-indigo-100 text-indigo-700 text-left py-3 px-6'>
					<span className='col-span-4 font-semibold'>Activities</span>
					<span className='font-semibold text-center'>
						Transportation
					</span>
					<span className='font-semibold text-center'>Entry Fee</span>
				</div>

				<div className='max-h-[600px] overflow-y-auto p-1'>
					{(!result?.days || result?.days.length === 0) && (
						<p className='text-center text-xl text-gray-500 py-10'>
							No trip plan available at the moment
						</p>
					)}

					{result?.days?.map((dayPlan, _idx) => (
						<TripCard
							dayPlan={dayPlan}
							key={dayPlan.day + "-day" + _idx}
						/>
					))}
				</div>
			</div>

			<div className='text-center mt-8'>
				<ButtonComponent
					onClick={setIsSubmitted}
					className='px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md'
				>
					Plan Another Trip
				</ButtonComponent>
			</div>
		</section>
	);
};

export default TripSummary;

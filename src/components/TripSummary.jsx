import React from "react";
import TripCard from "./TripCard";
import ButtonComponent from "./Button";

const TripSummary = ({ result, setIsSubmitted }) => {
	return (
		<section className='w-full p-10'>
			<h2 className='text-2xl font-bold text-center mb-4'>
				Your Trip Plan
			</h2>
			<div className='bg-white p-6 rounded-lg shadow-md max-h-[600px] overflow-auto border'>
				{(!result?.plan || result?.plan?.length === 0) && (
					<p className='text-center text-xl'>
						No trip plan available at the moment
					</p>
				)}
				{result?.plan?.map((dayPlan, _idx) => (
					<TripCard
						dayPlan={dayPlan}
						key={dayPlan.day + "-day" + _idx}
					/>
				))}
			</div>

			<ButtonComponent onClick={setIsSubmitted}>
				Plan Another Trip
			</ButtonComponent>
		</section>
	);
};

export default TripSummary;

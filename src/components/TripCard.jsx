import React from "react";

const TripCard = ({ dayPlan }) => {
	return (
		<div key={dayPlan.day} className='p-4 bg-gray-100 mb-4 rounded-lg'>
			<h3 className='text-xl font-semibold text-indigo-700 mb-4'>
				{dayPlan.day}
			</h3>

			<ul className='space-y-2'>
				{dayPlan.activities.map((activity, index) => (
					<li
						key={index}
						className='grid grid-cols-6 gap-x-4 items-center bg-white p-3 rounded-md shadow-sm'
					>
						<p className='text-gray-700 italic col-span-4'>
							{activity.name}
						</p>
						<p className='text-center'>
							{activity?.budget?.transportation || "N/A"}
						</p>
						<p className='text-center'>
							{activity?.budget?.entry_fee || "N/A"}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TripCard;

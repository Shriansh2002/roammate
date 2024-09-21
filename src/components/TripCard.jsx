import React from "react";

const TripCard = ({ dayPlan }) => {
	return (
		<div key={dayPlan.day} className='mb-6'>
			<h3 className='text-xl font-semibold mb-2 text-indigo-700'>
				Day {dayPlan.day}
			</h3>
			<ul className='space-y-2'>
				{dayPlan.activities.map((activity, index) => (
					<li
						key={index}
						className='border-b pb-2 grid grid-cols-6 gap-x-2'
					>
						<p className='font-bold col-span-1'>{activity.time}</p>
						<p className='text-gray-700 italic col-span-5'>
							{activity.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TripCard;

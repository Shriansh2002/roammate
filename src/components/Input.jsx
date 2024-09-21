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
				required={true}
			/>
		</div>
	);
};

export default InputComponent;

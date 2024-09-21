import LoadingSpinner from "./LoadingSpinner";

const ButtonComponent = ({ onClick, isLoading, children, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={`w-full bg-indigo-600 text-white rounded-lg p-3 mt-4 hover:bg-indigo-700 transition-colors ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			disabled={isLoading || disabled}
		>
			{isLoading ? (
				<>
					<LoadingSpinner />
					<span>Loading...</span>
				</>
			) : (
				children
			)}
		</button>
	);
};

export default ButtonComponent;

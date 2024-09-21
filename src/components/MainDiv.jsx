import useTripForm from "../hooks/useTripForm";
import FormComponent from "./FormComponent";
import TripSummary from "./TripSummary";

const MainDiv = () => {
	const {
		data,
		result,
		isSubmitted,
		handleChange,
		handleSubmit,
		isLoading,
		setIsSubmitted,
	} = useTripForm();

	return (
		<section className='min-h-screen flex items-center justify-center'>
			{isSubmitted ? (
				<TripSummary
					result={result}
					setIsSubmitted={() => setIsSubmitted(false)}
				/>
			) : (
				<FormComponent
					data={data}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
				/>
			)}
		</section>
	);
};

export default MainDiv;

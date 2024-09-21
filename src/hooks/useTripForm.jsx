import axios from "axios";
import { useState } from "react";

const initialValues = {
	destination: "",
	days: 1,
};

const useTripForm = () => {
	const [data, setData] = useState(initialValues);
	const [result, setResult] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const days = data.days.toString();
			const destination = data.destination;

			const response = await axios.get(
				"https://ai-trip-planner.p.rapidapi.com/",
				{
					params: {
						days: days,
						destination: destination,
					},
					headers: {
						"X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
						"X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
					},
				}
			);
			setResult(response.data);
			setIsSubmitted(true);
			setData({ destination: "", days: 1 });
		} catch (error) {
			console.error(error);
			setIsSubmitted(false);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		data,
		result,
		isSubmitted,
		isLoading,
		handleChange,
		handleSubmit,
		setIsSubmitted,
	};
};

export default useTripForm;

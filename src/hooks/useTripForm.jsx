import axios from "axios";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const initialValues = {
	destination: "",
	days: 1,
	budget: 10000,
};

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

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

			console.log(response.data);

			const prompt = `
			I want you to redesign this trip itinerary based on the given budget.

			The itinerary is: ${JSON.stringify(response.data, null, 2)}.

			The budget is ${data.budget} INR.

			Your task is to:
			1. **Update the itinerary** to fit within the budget.
			2. **Include a budget object for each activity** with ONLY these two fields:
			   * **"transportation":** Estimated cost for reaching the activity.
			   * **"entry_fee":** Cost of admission to the attraction.
			3. **Adjust the activities** to stay within the budget. You may remove or combine activities.

			Do NOT add new fields to the budget objects like "accommodation", "food", or "shopping."

			Return a JSON itinerary in the following format:

			{
			  "trip_name": "Your Trip Name",
			  "total_budget": 10000,
			  "days": [
			    {
			      "day": "Day 1",
			      "activities": [
			        {
			          "name": "Activity Name",
			          "budget": {
			            "transportation": 200,
			            "entry_fee": 0
			          }
			        },
			        ...
			      ]
			    },
			    ...
			  ]
			}

			Remember to stick to the specified format and provide only "transportation" and "entry_fee" within the budget objects.
			`;
			const result = await model.generateContent(prompt);
			const response_from_gemini = await result.response;
			const text = response_from_gemini.text();

			const startIndex = text.indexOf("{");
			const endIndex = text.lastIndexOf("}");
			const tempText = text.slice(startIndex, endIndex + 1);

			const json = JSON.parse(tempText);
			console.log(json);

			setResult(json);
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

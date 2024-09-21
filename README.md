# Trip Planner App ✈️

A simple and intuitive web application to help users plan their trips by selecting a destination and specifying the number of days. This app integrates with a travel API to suggest activities for each day of the trip.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [API Integration](#api-integration)

## Features

-   Plan a trip by selecting a destination and the number of days.
-   Generate a daily itinerary with suggested activities for each day.
-   View the trip summary with activities listed for each day.
-   Ability to plan multiple trips with a reset functionality.
-   Responsive design with a clean and intuitive UI.

## Installation

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14.x or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Shriansh2002/RoamMate-Frontend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd RoamMate-Frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open the browser and visit `http://localhost:3000` to view the app.

## Usage

#### 1. Plan Your Trip:

Enter the destination and the number of days for your trip.

#### 2. Generate Trip Summary:

After submitting, the app will display a daily itinerary with activities.

#### 3. Plan Another Trip:

After viewing the trip summary, click the "Plan Another Trip" button to restart the process.

## Tech Stack

-   Frontend: React (with hooks), Tailwind CSS
-   Backend: Integrated with an external travel API for fetching activities
-   State Management: Custom React hooks (`useTripForm`)
-   Deployment: Vercel

## Project Structure

The project is structured as follows:

    src
    │
    ├── components/
    │   ├── Button.jsx
    │   ├── FormComponent.jsx
    │   ├── Input.jsx
    │   ├── LoadingSpinner.jsx
    │   ├── MainDiv.jsx
    │   ├── TripCard.jsx
    │   └── TripSummary.jsx
    ├── hooks/
    │   └── useTripForm.js
    ├── App.jsx
    ├── index.css
    └── main.jsx

## API Integration

This app integrates with a travel API to fetch suggestions for activities based on the destination and the number of days provided by the user. To configure the API:

#### 1. Set up API Key:

Update the useTripForm.js hook to include your API key and integrate it with the travel API.

#### 2. API Request:

Modify the fetchTripPlan function to send requests to the travel API and retrieve the itinerary.

```javascript
const fetchTripPlan = async (destination, days) => {
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

	const data = await response.json();
	return data;
};
```

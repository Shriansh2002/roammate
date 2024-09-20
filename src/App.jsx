import FormDiv from "./components/FormDiv";

function App() {
	return (
		<main className='grid lg:grid-cols-2 justify-between min-h-screen'>
			<FormDiv />
			<img
				src='https://i.pinimg.com/736x/57/e4/03/57e40361d7486e564ae934006094c498.jpg'
				alt='banner-image'
				className='hidden lg:block h-screen w-full rounded-l-3xl'
			/>
		</main>
	);
}

export default App;

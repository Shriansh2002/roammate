import MainDiv from "./components/MainDiv";

function App() {
	return (
		<main className='grid lg:grid-cols-5 min-h-screen'>
			<div className='lg:col-span-3'>
				<MainDiv />
			</div>
			<div className='lg:col-span-2 hidden lg:block'>
				<img
					src='https://i.pinimg.com/736x/57/e4/03/57e40361d7486e564ae934006094c498.jpg'
					alt='banner-image'
					className='h-screen w-full rounded-l-3xl'
				/>
			</div>
		</main>
	);
}

export default App;

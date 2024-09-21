import MainDiv from "./components/MainDiv";

function App() {
	return (
		<main className='grid lg:grid-cols-5 min-h-screen'>
			<div className='lg:col-span-3'>
				<MainDiv />
			</div>
			<div className='lg:col-span-2 hidden lg:block'>
				<img
					src='./image.webp'
					alt='banner-image'
					className='h-screen w-full rounded-l-3xl'
				/>
			</div>
		</main>
	);
}

export default App;

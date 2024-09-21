import MainDiv from "./components/MainDiv";

function App() {
	return (
		<main className='grid lg:grid-cols-5 min-h-screen'>
			<div className='lg:col-span-3'>
				<MainDiv />
			</div>
			<div className='lg:col-span-2 hidden lg:block'>
				<img
					src='https://files.oaiusercontent.com/file-53Nnvv6QgcMsbWWUTAvucE0E?se=2024-09-21T15%3A49%3A31Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd4215f30-0d78-45cb-a3f2-3d077cd8ed83.webp&sig=ReDM87egeiXQ9TmiC8ey3oA%2B%2Bq6/HkhkWjGNK7Sd9AA%3D'
					alt='banner-image'
					className='h-screen w-full rounded-l-3xl'
				/>
			</div>
		</main>
	);
}

export default App;

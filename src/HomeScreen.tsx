import Navbar from "./Navbar";
import Taskbar from "./Taskbar";

export default function HomeScreen() {
	return (
		<div className='relative flex justify-center w-full h-screen bg-homeWallpaper bg-cover'>
			<Navbar></Navbar>
			<Taskbar></Taskbar>
		</div>
	);
}

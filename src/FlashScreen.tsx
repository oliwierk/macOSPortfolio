import { useEffect, useState } from "react";
export default function FlashScreen() {
	let time = new Date().toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	let date = new Date().toLocaleDateString("pl-PL", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});
	const [ctime, setTime] = useState(time);
	const [cdate, setDate] = useState(date);

	const UpdateDateTime = () => {
		setTime(
			new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
		);
		setDate(
			new Date().toLocaleDateString("pl-PL", {
				day: "numeric",
				month: "long",
				weekday: "long",
			})
		);
	};

	useEffect(() => {
		const timerId = setInterval(UpdateDateTime, 10000);
		return () => clearInterval(timerId);
	}, []);

	return (
		<div className='relative flex flex-col items-center w-full h-screen bg-wallpaper bg-cover'>
			<div className='flex flex-col gap-2 mt-20'>
				<p className='text-center text-xl text-white'>{cdate}</p>
				<h1 className='text-8xl font-bold text-white'>{ctime}</h1>
			</div>
			<p className='absolute bottom-12 text-white text-lg'>
				Aby odblokowac, przeciagnij ekran do gory
			</p>
		</div>
	);
}

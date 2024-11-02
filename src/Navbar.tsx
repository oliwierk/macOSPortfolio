export default function Navbar() {
	return (
		<div className='absolute top-0 flex items-center justify-between w-full h-[3vh] bg-neutral-200 px-6 text-sm'>
			<div className='flex gap-4 font-bold '>
				<p>Logo</p>
				<p>App Name</p>
			</div>
			<div className='flex gap-4'>
				<p>Date</p>
				<p>Time</p>
			</div>
		</div>
	);
}

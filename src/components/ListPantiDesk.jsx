export default function ListPantiDesk() {
	const img = require(`../assets/solid.png`).default;
	return (
		<div className="flex justify-center my-8">
			<div className="relative aspect-square w-64 hover:grayscale duration-200 cursor-pointer">
				<img
					src=""
					className="w-full h-full object-cover rounded "
					alt="Your Image"
				/>
				<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
					<p className="text-white text-2xl font-bold">Hover Text</p>
				</div>
			</div>
		</div>
	);
}

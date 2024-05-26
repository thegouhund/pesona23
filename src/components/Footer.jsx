import pesonaLogo from "../assets/logoPesona.png";

const Footer = () => {
	// return (
	//   <footer class="bg-white">
	//     <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
	//       <div class="md:mb-0">
	//         <img src={pesonaLogo} alt="logo" width="80px" class="" />
	//       </div>
	//       <div class="md:flex md:justify-between">
	//         <div class="mb-6 md:mb-0 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
	//           <h1 id="footer-head" class="self-center text-2xl font-extrabold">
	//             PESONA 23
	//           </h1>
	//           <p id="footer-head" class="text-xl font-semibold italic ">
	//             Pengabdian Mahasiswa Untuk Edukasi, Sosialisasi dan Aksi Nyata
	//           </p>
	//           <p class="text-lg font-normal ">Institut Teknologi Kalimantan</p>
	//           <p class="text-md font-normal ">Angkatan 2023</p>
	//         </div>
	//         <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
	//           <div>
	//             <h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
	//               Follow us
	//             </h2>
	//             <ul class="text-gray-500 dark:text-gray-400 font-medium">
	//               <li class="mb-4">
	//                 <a
	//                   target="_blank"
	//                   href="https://www.instagram.com/pesona2023_/"
	//                   class="hover:underline flex items-center justify-center gap-2 "
	//                 >
	//                   <svg
	//                     xmlns="http://www.w3.org/2000/svg"
	//                     width="16"
	//                     height="16"
	//                     fill="black"
	//                     class="bi bi-instagram"
	//                     viewBox="0 0 16 16"
	//                   >
	//                     <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
	//                   </svg>
	//                   <p className="text-black">@pesona2023_</p>
	//                 </a>
	//               </li>
	//             </ul>
	//           </div>
	//         </div>
	//       </div>
	//     </div>
	//     <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	//     <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-6">
	//       ©
	//       <a href="#" class="hover:underline">
	//         Pesona
	//       </a>
	//       2023 | Institut Teknologi Kalimantan | Angkatan 2023
	//     </span>
	//   </footer>
	// );
	return (
		<>
			<footer className="mt-8 max-w-6xl mx-auto max-[1200px]:mx-8 flex justify-between max-md:flex-col max-md:justify-start max-md:gap-4">
				<div className="">
					<img src={pesonaLogo} alt="logo" width="80px" class="" />
					<h1
						id="footer-head"
						class="self-center text-2xl font-extrabold text-[#145DA0]"
					>
						PESONA 23
					</h1>
					<p
						id="footer-head"
						class="text-xl font-semibold italic text-[#145DA0]"
					>
						Pengabdian Mahasiswa untuk Edukasi, Sosialisasi dan Aksi
						Nyata
					</p>
					<p class="text-lg font-normal ">
						Institut Teknologi Kalimantan
					</p>
					<p class="text-md font-normal ">Angkatan 2023</p>
				</div>
				<a
					target="_blank"
					href="https://www.instagram.com/pesona2023_/"
					class="hover:underline flex items-center gap-2 "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="black"
						class="bi bi-instagram"
						viewBox="0 0 16 16"
					>
						<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
					</svg>
					<p className="text-black">@pesona2023_</p>
				</a>
			</footer>
			<hr class="my-6  sm:mx-auto border-gray-200 lg:my-8" />
			<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-6">
				©
				<a href="#" class="hover:underline">
					Pesona
				</a>
				2023 | Institut Teknologi Kalimantan | Angkatan 2023
			</span>
		</>
	);
};

export default Footer;

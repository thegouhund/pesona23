import navbarIcons from "../assets/navbarIcons.png";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import fishesImg from "../assets/fishes.png";
import rayImg from "../assets/ikan-pari.png";
import turtleImg from "../assets/penyu.png";
import jellyfishImg from "../assets/ubur.png";

const Timeline = () => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#75b8fa"
					fill-opacity="1"
					d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<section
				id="timeline"
				class="bg-gradient-to-b from-[#75b8fa] to-[#0D839E] to-90% relative scroll-mt-72"
			>
				<img
					src={fishesImg}
					alt=""
					className="absolute -top-[100px] max-[1100px]:right-0 right-[300px] max-[1100px]:h-40 max-[1100px]:hidden h-52 rotate-90"
				/>
				<img
					src={fishesImg}
					alt=""
					className="absolute top-[200px] right-5 h-52 rotate-180 max-[1100px]:h-40"
				/>

				<img
					src={rayImg}
					alt=""
					className="absolute top-5 left-[300px] max-[1100px]:left-0 h-32 md:h-48"
				/>
				<img
					src={turtleImg}
					alt=""
					className="absolute top-80 left-10 h-20 scale-x-[-1]"
				/>
				<div
					class="mx-auto max-w-screen-xl "
					data-aos="zoom-in"
					data-aos-duration="2000"
				>
					<h1 class="mb-8 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-5xl text-center text-white">
						Timeline Acara
					</h1>
					<div class="flex flex-col items-center pt-10">
						<ol class="relative border-s-2 border-gray-200 ">
							<li class="mb-10 ms-4">
								<div class="absolute w-3 h-3 mt-1 -start-9">
									<svg
										class="w-5 h-4 text-gray-200 "
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
									</svg>
								</div>
								<time class="mb-1 text-md text-2xl font-semibold text-left leading-none text-white ">
									Sabtu, 27 April 2024
								</time>
								<h3 class=" font-normal text-gray-100">
									Kunjungan ke Panti Asuhan
								</h3>
								<Link
									to="kunjungan"
									smooth
									duration={500}
									spy={true}
									offset={-100}
									className="inline-flex items-center mt-2 px-4 py-2 cursor-pointer text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
								>
									List Panti Asuhan
									<svg
										class="w-3 h-3 ms-2 rtl:rotate-180"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</li>
							<li class="mb-10 ms-4">
								<div class="absolute w-3 h-3  mt-1 -start-9">
									<svg
										class="w-5 h-4 text-gray-200"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
									</svg>
								</div>
								<time class="mb-1 text-md text-2xl font-semibold leading-none text-white ">
									Minggu, 28 April 2024
								</time>
								<h3 class=" font-normal text-gray-100 ">
									Pengabdian Masyarakat di Pantai
								</h3>
								<Link
									to="daftarpantai"
									smooth
									duration={500}
									spy={true}
									offset={-100}
									className="inline-flex items-center mt-2 px-4 py-2 cursor-pointer text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
								>
									Daftar Pantai
									<svg
										class="w-3 h-3 ms-2 rtl:rotate-180"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</Link>
							</li>
						</ol>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#FFFFFF"
						fill-opacity="1"
						d="M0,128L48,160C96,192,192,256,288,245.3C384,235,480,149,576,128C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</section>
		</>
	);
};

export default Timeline;

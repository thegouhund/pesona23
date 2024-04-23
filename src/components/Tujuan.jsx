import handshakeImg from "../assets/handshake.png";
import hatImg from "../assets/education.png";
import solidImg from "../assets/solidarity.png";
import Title from "./Title";

const Tujuan = () => {
	return (
		<>
			<div class="flex justify-center  m-20">
				<h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center">
					Tujuan Acara
				</h1>
			</div>
			<div className="mx-4 flex max-md:flex-col md:gap-8 justify-center items-stretch max-md:items-center">
				<div className="rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
					<img src={handshakeImg} className="w-1/2 " />
					<h4 className="text-xl font-bold">Pengenalan</h4>
					<p className="mb-16">
						Mengenal satu sama lain mahasiswa seluruh program studi
						angkatan 2023 Institut Teknologi Kalimantan.
					</p>
				</div>

				<div className="rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
					<img src={hatImg} className="w-1/2" />
					<h4 className="text-xl font-bold">Peran Mahasiswa</h4>
					<p className="mb-16">
						Menjalankan peran sebagai mahasiswa yang peduli terhadap
						masyarakat dan lingkungan sekitar.
					</p>
				</div>

				<div className="rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
					<img src={solidImg} className="w-1/2" />
					<h4 className="text-xl font-bold">Solidaritas</h4>
					<p className="mb-16">
						Memperkuat rasa solidaritas antar sesama mahasiswa
						angkatan 2023 Institut Teknologi Kalimantan.
					</p>
				</div>
			</div>
		</>
	);
};

export default Tujuan;

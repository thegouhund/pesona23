import handshakeImg from "../assets/handshake.png";
import hatImg from "../assets/topi_wisuda.png";
import solidImg from "../assets/solid.png";
import Title from "./Title";

const Tujuan = () => {
  return (
    <>
      <Title>Tujuan Acara</Title>
      <div className="mx-4 flex max-md:flex-col md:gap-8 justify-center items-stretch max-md:items-center">
        <div className="bg-[#7BCB6B] rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Pengenalan</h4>
          <p className="mb-16">
            Mengenal satu sama lain mahasiswa se2luruh program studi angkatan
            2023 Institut Teknologi Kalimantan.
          </p>
          <img src={handshakeImg} className="w-1/2" />
        </div>

        <div className="bg-[#FF7F8A] rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Peran Mahasiswa</h4>
          <p className="mb-16">
            Menjalankan peran sebagai mahasiswa yang peduli terhadap masyarakat
            dan lingkungan sekitar.
          </p>
          <img src={hatImg} className="w-1/2" />
        </div>

        <div className="bg-[#FFAD61] rounded-3xl flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Solidaritas</h4>
          <p className="mb-16">
            Memperkuat rasa solidaritas antar sesama mahasiswa angkatan 2023
            Institut Teknologi Kalimantan.
          </p>
          <img src={solidImg} className="w-1/2" />
        </div>
      </div>
    </>
  );
};

export default Tujuan;

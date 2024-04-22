import handshakeImg from "../assets/handshake.png";
import hatImg from "../assets/topi_wisuda.png";
import solidImg from "../assets/solid.png";

const Tujuan = () => {
  return (
    <>
      <h3 className="text-3xl text-center ">Tujuan</h3>
      <div className="mx-4 flex max-md:flex-col md:gap-8 justify-center items-center">
        <div className="bg-[#7BCB6B] rounded flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Pengenalan</h4>
          <p className="mb-16">
            Mengenal satu sama lain mahasiswa seluruh program studi angkatan
            2023 Institut Teknologi Kalimantan.
          </p>
          <img src={handshakeImg} className="w-1/2" />
        </div>

        <div className="bg-[#FF7F8A] rounded flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Peran Mahasiswa</h4>
          <p className="mb-16">
            Menjalankan peran sebagai mahasiswa yang peduli terhadap masyarakat
            dan lingkungan sekitar.
          </p>
          <img src={hatImg} className="w-1/2" />
        </div>

        <div className="bg-[#FFAD61] rounded flex flex-col justify-center items-center mb-8 p-4 text-center w-80 aspect-square">
          <h4 className="text-xl font-bold">Solidaritas</h4>
          <p className="mb-16">
            Memperkuat rasa solidaritas dan peduli antar sesama mahasiswa
            seluruh program studi angkatan 2023 Institut Teknologi Kalimantan.
          </p>
          <img src={solidImg} className="w-1/2" />
        </div>
      </div>
    </>
  );
};

export default Tujuan;

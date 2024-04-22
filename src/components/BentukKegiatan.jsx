import pantiImg from "../assets/panti.jpeg";
import pantiData from "../api/panti.json";
import { BoxArrowUpRight } from "react-bootstrap-icons";

const BentukKegiatan = () => {
  return (
    <>
      <h3 className="text-2xl my-8 text-center">
        Daftar Panti Asuhan yang Kami Kunjungi
      </h3>

      <div className="overflow-auto mx-4 h-[500px] p-4 border border-gray-500 rounded">
        <div className="flex flex-col justify-center gap-4 ">
          {pantiData.map((panti) => {
            console.log(panti);
            return (
              <a
                href="#"
                className="border border-gray-300 px-4 py-2 rounded leading-tight flex items-center justify-between hover:underline"
              >
                <div>
                  <p className="text-lg">{panti.name}</p>
                  <p className="text-gray-800 leading-tight my-2">
                    {panti.address}
                  </p>
                </div>
                <BoxArrowUpRight size={24} />
              </a>
            );
          })}
        </div>
      </div>

      <h3 className="text-2xl my-8 text-center">
        Daftar Pantai yang Kami Kunjungi
      </h3>

      <div className="overflow-auto mx-4 h-[500px] p-4 border border-gray-500 rounded">
        <div className="flex flex-col justify-center gap-4 ">
          {pantiData.map((panti) => {
            console.log(panti);
            return (
              <a
                href="#"
                className="border border-gray-300 px-4 py-2 rounded leading-tight flex items-center justify-between hover:underline"
              >
                <div>
                  <p className="text-lg">{panti.name}</p>
                  <p className="text-gray-800 leading-tight my-2">
                    {panti.address}
                  </p>
                </div>
                <BoxArrowUpRight size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BentukKegiatan;

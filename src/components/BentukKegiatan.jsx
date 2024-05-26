import pantiImg from "../assets/panti.jpeg";
import pantiData from "../api/panti.json";
import pantaiData from "../api/pantai.json";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import Title from "./Title";

const BentukKegiatan = () => {
  return (
    <>
      <div id="kunjungan" class="flex justify-center mt-10 scroll-mt-40">
        <Title>Daftar Panti Asuhan</Title>
      </div>
      <div className="overflow-auto mx-4 h-[500px] p-4 border border-gray-500 rounded">
        <div className="flex flex-col justify-center gap-4 ">
          {pantiData.map((panti) => {
            return (
              <a
                href={panti.map}
                className="border border-gray-300 px-4 py-2 rounded leading-tight flex items-center justify-between hover:underline w-full"
              >
                <div>
                  <p className="text-lg">{panti.name}</p>
                  <p className="text-gray-800 leading-tight my-2">
                    {panti.address}
                  </p>
                </div>
                <div>
                  <BoxArrowUpRight size={20} className="w-[120px]" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div id="daftarpantai" class="flex justify-center mt-10">
        <Title>Daftar Pantai</Title>
      </div>
      <div className="flex flex-col justify-center gap-4 mx-4 ">
        {pantaiData.map((pantai) => {
          return (
            <a
              href={pantai.map}
              className="border border-gray-300 px-4 py-2 rounded leading-tight flex items-center justify-between hover:underline w-full"
            >
              <div>
                <p className="text-lg">{pantai.name}</p>
                <p className="text-gray-800 leading-tight my-2">
                  {pantai.address}
                </p>
              </div>
              <div>
                <BoxArrowUpRight size={20} className="w-[120px]" />
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default BentukKegiatan;

import pantiImg from "../assets/panti.jpeg";
import pantiData from "../api/panti.json";
import pantaiData from "../api/pantai.json";


const BentukKegiatanLG = () => {
  return (
    <>
      <div class="flex justify-center flex-wrap">
        {pantiData.map((panti) => {
          return (
            <a href={panti.map} target="_blank" class="relative aspect-square w-64 duration-200 cursor-pointer">
              <div class="flex items-center justify-center">
                <img
                  src={panti.img}
                  class="w-52 h-52 object-cover rounded-lg"
                />
                <div class="absolute flex items-center w-52 h-52 rounded-lg justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300 ease-in-out">
                  <p class="text-white text-2xl font-bold text-center">
                    {panti.name}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div class="flex justify-center flex-wrap">
        {pantaiData.map((pantai) => {
          return (
            <a href="" class="relative aspect-square w-64 duration-200 cursor-pointer">
              <div class="flex items-center justify-center">
                <img
                  src="https://i.ibb.co/Btsg9k2/LKSA-Al-Furqon.jpg"
                  class="w-52 h-52 object-cover rounded-lg"
                />
                <div class="absolute flex items-center w-52 h-52 rounded-lg justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300 ease-in-out">
                  <p class="text-white text-2xl font-bold text-center">
                    {pantai.name}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default BentukKegiatanLG;

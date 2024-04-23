import pantiImg from "../assets/panti.jpeg";
import pantiData from "../api/panti.json";
import pantaiData from "../api/pantai.json";

const BentukKegiatanLG = () => {
  return (
    <>
      <div class="flex justify-center  m-20">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center">
          Daftar LKSA
        </h1>
      </div>

      <div class="flex justify-center flex-wrap ">
        {pantiData.map((panti) => {
          return (
            <a
              href={panti.map}
              target="_blank"
              class="relative aspect-square w-64 duration-200 cursor-pointer"
            >
              <div class="flex items-center justify-center ">
                <img
                  src={panti.img}
                  class="w-52 h-52 object-cover shadow-lg rounded-lg"
                />
                <div class="absolute flex items-center w-52 h-52 rounded-lg  justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition duration-300 ease-in-out">
                  <p class="text-white text-2xl font-bold text-center">
                    {panti.name}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div class="flex justify-center  m-20">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-default md:text-3xl lg:text-5xl text-center">
          Daftar Pantai
        </h1>
      </div>

      <div class="flex justify-center flex-wrap gap-10">
        {pantaiData.map((pantai) => {
          return (
            <div class="max-w-sm overflow-hidden rounded-lg p-2 shadow-lg">
              <img
                class="w-full"
                src={pantai.img}
                alt="Sunset in the mountains"
              ></img>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{pantai.name}</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Button
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BentukKegiatanLG;

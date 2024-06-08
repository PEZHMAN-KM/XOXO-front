export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-between m-0 p-0 bg-[#3B2A9F]">
      <div className="flex justify-center mt-9">
        <img
          className="w-72 object-contain transition duration-300 hover:scale-125 hover:opacity-50"
          src="./Logo.png"
          alt=""
        />
        {/* <h1 className="text-white font-bold text-7xl">
                Tic-Tac-Toe
            </h1> */}
      </div>
      <div className="flex justify-center items-center flex-col -mt-36">
        <button className="bg-orange-400 text-white px-8 py-2 text-2xl font-bold rounded-xl transition duration-150  hover:scale-x-110 hover:bg-orange-500">
          Start
        </button>
        <button className="text-white font-bold text-2xl mt-5 transition duration-150  hover:scale-x-125">
          Score
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className="text-orange-300 font-bold text-xl">
          Proved By PEZHMAN.KM
        </h1>
      </div>
    </div>
  );
}

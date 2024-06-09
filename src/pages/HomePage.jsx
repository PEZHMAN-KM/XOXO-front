import Start from "../components/start";

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
      <Start />
      <div className="flex justify-center mb-4">
        <h1 className="text-orange-300 font-bold text-xl">
          Proved By PEZHMAN.KM
        </h1>
      </div>
    </div>
  );
}

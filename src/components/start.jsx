export default function Start() {
  return (
    <>
      <div className="flex justify-center items-center flex-col -mt-36">
        <a
          className="bg-orange-400 text-white px-8 py-2 text-2xl font-bold rounded-xl transition duration-150  hover:scale-x-110 hover:bg-orange-500"
          href="login"
        >
          Start
        </a>
        <a
          href="table"
          className="text-white font-bold text-2xl mt-5 transition duration-150  hover:scale-x-125"
        >
          Score
        </a>
      </div>
    </>
  );
}

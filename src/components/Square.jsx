export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="w-32 h-32 bg-[#1C140F] rounded-xl text-8xl font-bold text-white"
      >
        {value}
      </button>
    </>
  );
}

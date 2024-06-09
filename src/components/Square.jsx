export default function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
  }
  return (
    <>
      <button onClick={handleClick} className="w-10 h-10 bg-blue-300">
        {value}
      </button>
    </>
  );
}

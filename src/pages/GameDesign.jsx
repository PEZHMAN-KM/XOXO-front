import Square from "../components/Square";
import Start from "../components/start";

export default function Board() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center gap-2 bg-red-100">
        <div className="flex justify-center gap-2">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="flex justify-center gap-2">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="flex justify-center gap-2">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
    </>
  );
}

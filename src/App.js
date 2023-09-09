import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#344151] items-center justify-center flex-col gap-10">
      <div className="text-[#0398d4] capitalize font-medium text-2xl">
        increment & decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={() => decreaseCount()}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>

        <div id="counter" className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button
          onClick={() => increaseCount()}
          className="border-l-2 w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={() => resetCount()}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;

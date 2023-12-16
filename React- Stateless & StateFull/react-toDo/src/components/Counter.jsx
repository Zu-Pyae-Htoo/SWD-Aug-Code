import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const increment = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //component ထဲ setState နဲ့ ခဏခဏချိန်းမယ်ဆို
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => {
        return prev - 1;
      });
    }
  };
  return (
    <div className=" font-mono border-2 border-gray-500 rounded-xl p-10">
      <h1 className=" text-4xl font-bold mb-5">Counter : {count}</h1>
      <div className=" flex gap-5">
        <button
          onClick={decrement}
          className=" bg-blue-600 px-3 py-1 text-white rounded-lg"
        >
          Sub(-)
        </button>
        <button
          onClick={increment}
          className=" bg-blue-600 px-3 py-1 text-white rounded-lg"
        >
          Add(+)
        </button>
      </div>
    </div>
  );
};

export default Counter;

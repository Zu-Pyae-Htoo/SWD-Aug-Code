// Counter.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Counter App</h1>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={decrement}
        >
          -
        </button>
        <span className="bg-gray-200 text-xl px-4 py-2">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

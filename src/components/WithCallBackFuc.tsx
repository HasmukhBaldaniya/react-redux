import React, { useState, useCallback } from "react";
const funccount = new Set();

const WithCallBack = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
   
  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementNumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])
     
  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  console.log(funccount.size);

  return (
    <div>
      Count: {count},
      Number: {number}
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>increase number</button>
    </div>
  );
};

export default WithCallBack;

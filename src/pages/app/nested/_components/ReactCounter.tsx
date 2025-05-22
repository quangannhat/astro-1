import { useState } from "react";

export default function ReactCounter(props: any) {
  const [count, setCount] = useState(0);
  return (
    <div className="rounded-md border border-zinc-500 p-10">
      <h2>React component</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-400 px-8 py-4 text-white"
      >
        Count is {count}
      </button>
      {props.children}
    </div>
  );
}

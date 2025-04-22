// src/components/Counter.tsx
import useCounterStore from "../Store/counterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;

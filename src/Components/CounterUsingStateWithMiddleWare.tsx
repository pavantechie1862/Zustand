import storeWithMiddleware from "../Store/storeWithMiddleware";

const CounterUsingStateWithMiddleWare = () => {
  const count = storeWithMiddleware((state) => state.count);
  const increase = storeWithMiddleware((state) => state.increase);
  const decrease = storeWithMiddleware((state) => state.decrease);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default CounterUsingStateWithMiddleWare;

// import Counter from "./Components/Counter";
import CounterUsingStateWithMiddleWare from "./Components/CounterUsingStateWithMiddleWare";
import UsersList from "./Components/UsersList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Zustand Counter App</h1>
      <CounterUsingStateWithMiddleWare />

      <UsersList />
    </div>
  );
}

export default App;

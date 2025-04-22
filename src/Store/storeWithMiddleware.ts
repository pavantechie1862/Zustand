import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const storeWithMiddleware = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () =>
          set((state) => ({ count: state.count + 1 }), false, "increase"), // 'increase name' to track actions in dev tools
        decrease: () =>
          set((state) => ({ count: state.count - 1 }), false, "decrease"), // false -> skipping merge (advanced stuff — just keep it for now)
      }),
      {
        name: "counter-storage",
      }
    ),
    {
      name: "Zustand Counter Store",
    }
  )
);

export default storeWithMiddleware;

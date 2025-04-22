import { create } from "zustand";
import { BaseURL } from "./AsyncStore";

export type ApiStatus = "idle" | "loading" | "success" | "error";

export type ApiState<T> = {
  data: T | null;
  status: ApiStatus;
  error: string | null;
  hasFetched: boolean;
  fetchData: () => Promise<void>;
};

export function createApiStore<T>(url: string) {
  return create<ApiState<T>>((set) => ({
    data: null,
    status: "idle",
    error: null,
    hasFetched: false,

    fetchData: async () => {
      set({ status: "loading", error: null });

      try {
        const response = await fetch(BaseURL + url);
        const result = await response.json();

        set({
          data: result,
          status: "success",
          hasFetched: true,
        });
      } catch (err: any) {
        set({
          error: err.message || "Something went wrong",
          status: "error",
          hasFetched: false,
        });
      }
    },
  }));
}

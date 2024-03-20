import { StateCreator } from "zustand";
import { StateB, SliceA, SliceB } from "./sliceTypes";

const initialStateB: StateB = {
  countB: 0,
}

const createSliceB: StateCreator<
  SliceA & SliceB,
  [],
  [],
  SliceB
> = (set) => ({
  countB: 0,
  incrementB: () => set((state) => ({ countB: state.countB + 1 })),
  decrementB: () => set((state) => ({ countB: state.countB - 1 })),
  resetB: () => set(initialStateB)
})

export { createSliceB, initialStateB };

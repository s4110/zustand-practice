import { StateCreator } from "zustand";
import { StateA, SliceA, SliceB } from "./sliceTypes";

const initialStateA: StateA = {
  countA: 0,
}

const createSliceA: StateCreator<
  SliceA & SliceB,
  [],
  [],
  SliceA
> = (set) => ({
  countA: 0,
  incrementA: () => set((state) => ({ countA: state.countA + 1 })),
  decrementA: () => set((state) => ({ countA: state.countA - 1 })),
  resetA: () => set(initialStateA)
})

export { createSliceA, initialStateA };

import { StateCreator } from "zustand";
import { Shared, SliceA, SliceB } from "./sliceTypes";
import { initialStateA } from "./sliceA";
import { initialStateB } from "./sliceB";

const createSharedSlice: StateCreator<
  SliceA & SliceB,
  [],
  [],
  Shared
> = (set ) => ({
  resetAll: () => set({...initialStateA, ...initialStateB})
})

export { createSharedSlice };

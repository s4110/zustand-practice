import { create } from "zustand";
import { createSliceA } from "./slices/sliceA";
import { createSliceB } from "./slices/sliceB";
import { createSharedSlice } from "./slices/shared";
import { SliceA, SliceB, Shared } from "./slices/sliceTypes";

const useSliceStore = create<SliceA & SliceB & Shared>()((...a) => ({
  ...createSliceA(...a),
  ...createSliceB(...a),
  ...createSharedSlice(...a)
}))

export { useSliceStore };
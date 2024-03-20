export type StateA = {
  countA: number
}
  
export type ActionA = {
  incrementA: () => void,
  decrementA: () => void,
  resetA: () => void,
}
  
export type SliceA = StateA & ActionA;

export type StateB = {
  countB: number,
}
  
export type ActionB = {
  incrementB: () => void,
  decrementB: () => void,
  resetB: () => void,
}
  
export type SliceB = StateB & ActionB;

export type Shared = {
  resetAll: () => void,
}

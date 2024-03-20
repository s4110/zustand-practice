import { FC, ReactNode } from "react";

type CounterProps = {
  children?: ReactNode,
  count: number,
  onIncrement: () => void,
  onDecrement: () => void,
  onReset: () => void,
  onResetAll: () => void,
}

const Counter: FC<CounterProps> = ({children, count, onIncrement, onDecrement, onReset, onResetAll}) => {
  return (
    <>
      <h2>{children}</h2>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>reset</button>
      <button onClick={onResetAll}>reset all</button>
    </>
  )
}

export { Counter };